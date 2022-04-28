import { callbackify } from "util";
import { RouterView, useRoute } from "vue-router";

export default () => {
  return (
    <div style={{ height: "calc(100% - 20px)", padding: "10px 0" }}>
      <RouterView />
    </div>
  );
};
