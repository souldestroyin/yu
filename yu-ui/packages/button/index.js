import YuButton from "./Button.vue";

YuButton.install = function (app) {
  app.component(YuButton.name, YuButton);
};

export default YuButton;
