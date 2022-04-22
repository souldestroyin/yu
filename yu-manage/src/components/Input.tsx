import { defineComponent, ref, watch, PropType } from "vue";
import { ElButton } from "element-plus";

const Input = defineComponent({
  props: {
    value: {
      type: String,
      required: false,
    },
    onChange: {
      type: Function as PropType<(v: any) => void>,
      required: false,
    },
  },
  setup(props) {
    const input = ref<HTMLInputElement | null>(null);

    watch(
      () => props.value,
      () => {
        input.value!.value = props.value || "";
      }
    );

    return () => {
      return (
        <div>

        <ElButton type="primary">primary btn</ElButton>
          <input
            ref={input}
            onInput={(e) => {
              props.onChange &&
                props.onChange((e.target as HTMLInputElement).value);
            }}
            value={props.value}
          />
          </div>

      );
    };
  },
});

export const FormExample = defineComponent({
  setup() {
    let formData = {
      name: "xxx",
      info: "yyy",
    };

    const ver = ref(0);

    return () => {
      return (
        <div key={ver.value}>
          <button
            onClick={() => {
              formData = {
                name: "xxx",
                info: "yyy",
              };
              ver.value++;
            }}
          >
            submit
          </button>

          <Input
            value={formData.name}
            onChange={(v) => (formData.name = v)}
          ></Input>
          <Input
            value={formData.info}
            onChange={(v) => (formData.info = v)}
          ></Input>
        </div>
      );
    };
  },
});
