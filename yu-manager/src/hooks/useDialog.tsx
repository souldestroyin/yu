import YuDialog from "@/components/YuDialog";
import { createApp, App, ref, Ref, VNode } from "vue";

type OptionsType = {
  title: string;
  width?: string | number;
  component: () => VNode;
};

export function useDialog(): [
  open: (options: OptionsType) => void,
  close: () => void,
  loading: Ref<Boolean>
] {
  const loading = ref(false);

  let instance: App<Element>;
  const open = (options: OptionsType) => {
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
