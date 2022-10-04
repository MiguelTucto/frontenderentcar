<template >
  <div class="container">
    <div class="flex flex-column align-items-center">
      <pv-card class="mt-5 surface-card shadow-5">
        <template v-slot:title>
          <div class="text-center">Complete with your personal information</div>
        </template>
        <template v-slot:content>
          <form @submit.prevent="handleSubmit(!v$.$invalid)">
            <div>
              <label for="name" class="block text-900 font-medium mb-2" >Name</label>
              <pv-input-text id="registerName" v-model="name" :class="{ 'p-invalid': v$.name.$invalid && submitted }" class="w-full" aria-describedby="userName"/>
              <small v-show="!v$.name.$model && submitted" class="p-error">Name is required.</small>
              <label for="lastName" class="block text-900 font-medium mb-2">Last Name</label>
              <pv-input-text id="registerLastName" v-model="lastName" :class="{ 'p-invalid': v$.lastName.$invalid && submitted }" class="w-full"/>
              <small v-show="!v$.lastName.$model && submitted" class="p-error">Last Name is required.</small>
              <label for="typeOfUser" class="block text-900 font-medium mb-2" >Type Of User</label>
              <pv-input-text id="registerTypeOfUser" v-model="typeOfUser" :class="{ 'p-invalid': v$.typeOfUser.$invalid && submitted }" class="w-full" aria-describedby="typeOfUser"/>
              <small v-show="!v$.typeOfUser.$model && submitted" class="p-error">Type Of User is required.</small>
              <label for="imageUrl" class="block text-900 font-medium mb-2">Image URL</label>
              <pv-input-text id="registerImage" v-model="imageUrl" :class="{ 'p-invalid': v$.imageUrl.$invalid && submitted }" class="w-full"/>
              <small v-show="!v$.imageUrl.$model && submitted" class="p-error">Image URL is required.</small>
              <label for="phone" class="block text-900 font-medium mb-2">Phone</label>
              <pv-input-text id="registerPhone"  v-model="phone" :class="{ 'p-invalid': v$.phone.$invalid && submitted }"  />
              <small v-show="!v$.phone.$model && submitted" class="p-error ml-2">Phone is required.</small>
            </div>
            <div class="flex justify-space-between mt-5">
              <pv-button icon="pi pi-car" label="Go to eRentCar" class="p-button-link" @click="$router.push('/login')" />
              <pv-button icon="pi pi-arrow-right" iconPos="right" label="Continue" class="p-button-rounded" type="submit" />
            </div>
          </form>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
import UsersApiService from "@/user/subscription/services/users-api.service";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "first-step.component",
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      submitted: false,
      name: "",
      lastName: "",
      imageUrl: "",
      typeOfUser: "",
      phone: null,
      user: {},
      users: []
    };
  },
  validations() {
    return{
      name: {
        required,
      },
      lastName: {
        required,
      },
      typeOfUser: {
        required,
      },
      imageUrl: {
        required,
      },
      phone: {
        required,
      }
    };
  },
  methods: {
    nextPage(){
      this.$emit("next-page",
        {
          formData: {
            name: this.name,
            lastName: this.lastName,
            typeOfUser: this.typeOfUser,
            imageUrl: this.imageUrl,
            phone: this.phone
          },
          pageIndex: 0
        });
    },
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (isFormValid) {
        this.nextPage();
      }
    }
  }
};
</script>

<style scoped>

</style>