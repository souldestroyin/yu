const fs = require("fs");

// const formConfig = require("./form-config");

const file = fs.readFileSync("./input1.txt", "utf-8");

const arr = file
  .trim()
  .split("\n")
  .map((o) => o.replace(/^\d+\.(\s)*/, ""));

const transedFormConfig = require("./trans.js");

const res = [];

arr.forEach((label) => {
  if (!transedFormConfig[label]) {
    res.push(label);
    return;
  }
  res.push(transedFormConfig[label]);
});

const exportText = res.join("\n");

fs.writeFileSync("output", exportText, "utf-8");
