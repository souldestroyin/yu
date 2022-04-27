import YuDialog from "@/components/YuDialog";
import { createApp, App, ref, Ref, nextTick } from "vue";

export function useDialog(
  options: any
): [open: () => void, close: () => void, loading: Ref<Boolean>] {
  const loading = ref(false);

  let instance: App<Element>;
  const open = () => {
    instance = createApp(YuDialog, {
      ...options,
      loading,
    });
    instance.mount("#dialog");
  };

  const close = () => {
    console.log(instance);

    instance.unmount();
  };

  return [open, close, loading];
}
