const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;

const fs = require("fs");

const content = fs.readFileSync("./input2.js", "utf-8");

const ast = parser.parse(content, {
  sourceType: "module",
});

const res = {};

let prop = "";

traverse(ast, {
  Property({ node }) {
    // key.name 为label时 获得label
    if (node.key.name === "label") {
      res[node.value.value] = prop;
    }

    // label 获得prop
    if (node.value.type === "ObjectExpression") {
      prop = node.key.name;
    }
  },
});

module.exports = res;
