import YuDialog from "@/components/YuDialog";
import { createApp, App, ref, Ref, nextTick } from "vue";

export function useDialog(
  options: any
): [open: () => void, close: () => void, loading: Ref<Boolean>] {
  const loading = ref(false);

  const visible = ref(true);
  let instance: App<Element>;
  const open = () => {
    instance && instance.unmount();
    instance = createApp(YuDialog, {
      ...options,
      loading,
      visible,
    });
    instance.mount("#dialog");
  };

  const close = () => {
    console.log(instance);
    visible.value = false;

    console.log(visible);
    setTimeout(() => {
      instance.unmount();
    });
  };

  return [open, close, loading];
}
