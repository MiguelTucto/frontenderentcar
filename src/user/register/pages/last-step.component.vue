<template>
  <pv-button @click="complete"></pv-button>
</template>

<script>
export default {
  name: "last-step.component",
  data:() => {
    return {
      submitted: false
    }
  },
  methods: {
    complete() {
      this.$emit("complete",{ formData: {}});
    }
  }
};
</script>

<style scoped>

</style>