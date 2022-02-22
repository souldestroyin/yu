<template>
  <el-radio-group
    v-model="value"
    :size="size"
  >
    <el-radio-button
      v-for="o in options"
      :key="o.id"
      :label="o.id"
      @click.native.prevent="clickitem(o.id)"
    >{{ o.name }}</el-radio-button>
  </el-radio-group>

</template>

<script>
export default {
  name: 'YuRadio',
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickitem(id) {
      let newVal = ''

      if (id === this.value) {
        newVal = ''
      } else {
        newVal = id
      }
      this.$emit('change', newVal)
    }
  }
}
</script>
