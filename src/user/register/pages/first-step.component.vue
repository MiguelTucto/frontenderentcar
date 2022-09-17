<template>
  <div class="container">
    <div class="flex flex-column align-items-center">
      <pv-card class="mt-5">
        <template v-slot:title>
          <div class="text-center">Complete with your personal information</div>
        </template>
        <template v-slot:content>
          <div class="flex flex-column ">
            <label for="email1" class="block text-900 font-medium mb-2" >Name</label>
            <pv-input-text class="p-invalid" aria-describedby="userName"/>
            <small id="userName" class="p-error">Name is not correct.</small>
            <label for="email1" class="block text-900 font-medium mb-2">Last Name</label>
            <pv-input-text />
            <label for="email1" class="block text-900 font-medium mb-2">Address</label>
            <pv-input-text  />
            <label for="email1" class="block text-900 font-medium mb-2">Image URL</label>
            <pv-input-text  />
            <label for="email1" class="block text-900 font-medium mb-2">Phone</label>
            <pv-input-mask mask="(051) 999-999-999"  placeholder="(051) 999-999-999"/>
          </div>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "first-step.component"
};
</script>

<style scoped>

</style>