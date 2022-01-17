const fs = require("fs");

const formConfig = require("./form-config.json");

const file = fs.readFileSync("./target.txt", "utf-8");

const arr = file
  .trim()
  .split("\n")
  .map((o) => o.replace(/^\d+\.(\s)*/, ""));

console.log(formConfig);

// arr.map(label => {

// })
