import { defineComponent, PropType, VNode, toRef, watch, ref } from "vue";
import { ElDialog, ElLoading } from "element-plus";

import classes from "./style.module.scss";

console.log(classes);

export default defineComponent({
  name: "YuDialog",
  props: {
    title: {
      type: String,
      required: true,
    },
    width: {
      type: [String, Number],
      default: 500,
    },
    body: {
      type: Function as PropType<() => VNode>,
      required: true,
    },
    loading: {
      type: Object,
      required: true,
    },
  },
  setup(props, context) {
    const dialogRef = ref(null);

    let loadingInstance;
    watch(
      () => props.loading.value,
      () => {
        if (true) {
          loadingInstance = ElLoading.service({
            target: dialogRef.value!,
          });
        } else {
          loadingInstance && loadingInstance.close();
        }
      }
    );

    return () => (
      <ElDialog modelValue={true} title={props.title} width={props.width}>
        <div class={classes.dialogWrap} ref={dialogRef}>
          {props.body()}
        </div>
      </ElDialog>
    );
  },
});
