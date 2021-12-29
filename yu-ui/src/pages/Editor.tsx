import { defineComponent } from "vue";

import classes from "./style.module.scss";

console.log(classes);

export default defineComponent({
  setup() {
    return () => (
      <>
        <div class={classes.test}>
          test
          <span class={classes.b}>999999999</span>
        </div>
        <span class={classes.b}>6666</span>
      </>
    );
  },
});
