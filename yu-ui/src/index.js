import YuRadio from "../packages/radio";
import { version } from "../package.json";

const components = [YuRadio];

const install = (app, opts = {}) => {
  components.forEach((component) => {
    app.use(component);
  });
};

const YuUI = {
  version,
  install,
};
export { YuRadio, install };
export default YuUI;
