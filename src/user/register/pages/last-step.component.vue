<template>
  <div class="container">
    <div class="flex flex-column align-items-center">
      <pv-panel header="Our Terms and Conditions">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </pv-panel>
      <div>
        <pv-button class="p-button-rounded p-button-danger mr-5" icon="pi pi-times" @click="$router.push('/login')" ></pv-button>
        <pv-button class="mt-6" icon="pi pi-check" iconPos="right" label="Register" @click="complete"></pv-button>
      </div>
    </div>
  </div>
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