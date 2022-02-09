const { entry } = require("../webpack.config");
const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const { transformFromAst } = require("@babel/core");

module.exports = class webpack {
  constructor(options) {
    this.entry = options.entry;
    this.output = options.output;
    this.modules = [];
  }
  run() {
    // 从入口文件开始解析
    const info = this.parse(this.entry);
    this.modules.push(info);
    for (let i = 0; i < this.modules.length; i++) {
      const item = this.modules[i];
      const { dependencies } = item;
      if (dependencies) {
        for (let j in dependencies) {
          this.modules.push(this.parse(dependencies[j]));
        }
      }
    }

    const obj = {};
    this.modules.forEach((item) => {
      obj[item.entryFile] = {
        dependencies: item.dependencies,
        code: item.code,
      };
    });
    this.file(obj);
  }


  parse(entryFile) {

    //读取入口模块的内容了
    const content = fs.readFileSync(entryFile, "utf-8");

    // 分析依赖：文本 -> ast
    const ast = parser.parse(content, {
      sourceType: "module",
    });

    const dependencies = {};
    traverse(ast, {
      ImportDeclaration({ node }) {
        const pathName =
          "./" + path.join(path.dirname(entryFile), node.source.value);
        dependencies[node.source.value] = pathName;
      },
    });

    // ast -> 文件
    const { code } = transformFromAst(ast, null, {
      presets: ["@babel/preset-env"],
    });
    return {
      entryFile,
      dependencies,
      code,
    };
  }
  file(code) {
    //生成bundle启动器函数
    const filePath = path.join(this.output.path, this.output.filename);
    const newCode = JSON.stringify(code);
    const bundle = `(function(graph){
        function require(module){
            function otherRequire(relativePath){
               return require(graph[module].dependencies[relativePath])
            }

            var exports = {};
            (function(require,exports,code){
                eval(code)
            })(otherRequire,exports,graph[module].code)
            return exports;
        }
        require('${this.entry}')
    })(${newCode})`;
    //根据位置生成资源文件
    fs.writeFileSync(filePath, bundle, "utf-8");
  }
};
