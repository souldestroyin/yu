import YuDialog from "@/components/yu-dialog";
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
    instance.unmount();
  };

  return [open, close, loading];
}
