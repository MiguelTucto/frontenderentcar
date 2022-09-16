<template>
<v-container>
  <v-stepper v-model="step" >
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1">
        Personal Information
      </v-stepper-step>
      <v-stepper-step :complete="step > 2" step="2">
        Email and Password
      </v-stepper-step>
      <v-stepper-step :complete="step > 3" step="3">
        Finish up
      </v-stepper-step>
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content step="1">

      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</v-container>
</template>

<script>
export default {
  name: "register.component",
  data() {
    return {
      step: 1
    }
  }
};
</script>

<style scoped>

</style>