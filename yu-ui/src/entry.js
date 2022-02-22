import YuRadio from "../packages/radio/index";
import { version } from "../package.json";

// import Element from "element-ui";

// Vue.use(Element, {
//   size: "small",
// });

import YuButton from "../packages/button/index";

const components = [YuRadio, YuButton];

const install = (app, opts = {}) => {
  components.forEach((component) => {
    app.use(component);
  });
};

const YuUI = {
  version,
  install,
};
export default YuUI;
