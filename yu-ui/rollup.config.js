// const vuePlugin = require("../../rollup-plugin-vue/index");
import babel from "@rollup/plugin-babel";
import vuePlugin from "rollup-plugin-vue";
import json from "@rollup/plugin-json";

const es = {
  input: "src/entry.js",
  output: {
    file: "dist/index.bundle.js",
    name: "Yu",
    format: "es",
    globals: {
      vue: "Vue",
    },
  },
  external: ["vue"],
  plugins: [
    json(),
    babel(),
    vuePlugin({
      css: true,
    }),
  ],
};
const iife = {
  input: "src/entry.js",
  output: {
    file: "dist/index.js",
    name: "Yu",
    format: "iife",
    globals: {
      vue: "Vue",
    },
  },
  external: ["vue"],
  plugins: [
    json(),
    babel(),
    vuePlugin({
      css: true,
    }),
  ],
};
import { terser } from "rollup-plugin-terser";
const minEs = {
  input: "src/entry.js",
  external: ["vue"],
  output: {
    file: "dist/index.min.js",
    name: "Yu",
    format: "umd",
  },
  plugins: [
    json(),
    babel(),
    vuePlugin({
      css: true,
    }),
    terser(),
  ],
};

const cjs = {
  input: "src/entry.js",
  external: ["vue"],
  output: {
    file: "dist/index.cjs.js",
    name: "Yu",
    format: "cjs",
  },
  plugins: [
    json(),
    babel(),
    vuePlugin({
      css: true,
    }),
  ],
};
export default [es, iife, minEs, cjs];
