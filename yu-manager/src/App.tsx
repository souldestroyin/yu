import { callbackify } from "util";
import { RouterView, useRoute } from "vue-router";

export default () => {
  return (
    <div style={{ height: "100%" }}>
      <RouterView />
    </div>
  );
};
