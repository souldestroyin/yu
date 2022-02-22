<template>
  <button @click="count++">click {{ count }}</button>
</template>

<script>
export default {
  name: "YuButton",
  data: function () {
    return {
      count: 0,
    };
  },
};
</script>