<template >
  <div class="container">
    <div class="flex flex-column align-items-center">
      <pv-card class="mt-5 surface-card shadow-5">
        <template v-slot:title>
          <div class="text-center">Complete with your personal information</div>
        </template>
        <template v-slot:content>
          <!--

          <div class="flex flex-column ">
            <label for="name" class="block text-900 font-medium mb-2" >Name</label>
            <pv-input-text v-model.trim="user.name" class="p-invalid" aria-describedby="userName"/>
            <label for="lastName" class="block text-900 font-medium mb-2">Last Name</label>
            <pv-input-text v-model.trim="user.lastName"  />
            <label for="address" class="block text-900 font-medium mb-2">Address</label>
            <pv-input-text v-model.trim="user.address" />
            <label for="imageUrl" class="block text-900 font-medium mb-2">Image URL</label>
            <pv-input-text v-model.trim="user.imageUrl" />
            <label for="phone" class="block text-900 font-medium mb-2">Phone</label>
            <pv-input-mask v-model.trim="user.phone" mask="(051) 999-999-999"  placeholder="(051) 999-999-999"/>
          </div>

          -->
          <form @submit.prevent="handleSubmit(!v$.$invalid)">
            <div>
              <label for="name" class="block text-900 font-medium mb-2" >Name</label>
              <pv-input-text v-model="name" :class="{ 'p-invalid': v$.name.$invalid && submitted }" class="w-full" aria-describedby="userName"/>
              <label for="lastName" class="block text-900 font-medium mb-2">Last Name</label>
              <pv-input-text v-model="lastName" :class="{ 'p-invalid': v$.lastName.$invalid && submitted }" class="w-full"/>
              <label for="address" class="block text-900 font-medium mb-2">Address</label>
              <pv-input-text v-model="address" :class="{ 'p-invalid': v$.address.$invalid && submitted }" class="w-full"/>
              <label for="imageUrl" class="block text-900 font-medium mb-2">Image URL</label>
              <pv-input-text v-model="imageUrl" :class="{ 'p-invalid': v$.imageUrl.$invalid && submitted }" class="w-full"/>
              <label for="phone" class="block text-900 font-medium mb-2">Phone</label>
              <pv-input-mask v-model="phone" :class="{ 'p-invalid': v$.phone.$invalid && submitted }" mask="(051) 999-999-999"  placeholder="(051) 999-999-999"/>
            </div>
          </form>
        </template>
        <template v-slot:footer>
          <div class="flex justify-space-between">
            <pv-button icon="pi pi-arrow-left" label="Back" class="p-button-link" @click="$router.push('/login')" />
            <pv-button label="Submit" class="p-button-rounded" @click="nextPage" />
          </div>
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
    return{
      submitted: false,
      name: "",
      lastName: "",
      address: "",
      imageUrl: "",
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
      address: {
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
    getStorableUser(displayableUser){
      return{
        id: displayableUser.id,
        name: displayableUser.name,
        lastName: displayableUser.lastName,
        address: displayableUser.address,
        imageUrl: displayableUser.imageUrl,
        phone: displayableUser.phone
      }
    },
    nextPage(){
      this.$emit("next-page",
        {
          formData: {
            name: this.name,
            lastName: this.lastName,
            address: this.address,
            imageUrl: this.imageUrl,
            phone: this.phone
          },
          pageIndex: 0
        });
    },
    saveUser() {
      this.submitted = true;

      this.$emit("next-page",
        {
          formData: {

          },
          pageIndex: 0
        })

      if (this.user.id.trim()       &&
          this.user.name.trim()     &&
          this.user.lastName.trim() &&
          this.user.address.trim()  &&
          this.user.imageUrl.trim() &&
          this.user.phone.trim()){
        this.user = this.getStorableUser(this.user);
        UsersApiService.update(this.user.id, this.user);
      } else{
        this.user.id = 0;
        console.log(this.user);
        this.user = this.getStorableUser(this.user);
        UsersApiService.create(this.user).then((response) => {
          this.users.push(this.user);
          console.log(response);
        });
      }
    },
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (isFormValid) {
        let weightDimensional = (this.height + this.width + this.length) / 5000;
        let weight =
          weightDimensional > this.weight ? weightDimensional : this.weight;
        this.nextPage(weight);
      }
    }
  }
};
</script>

<style scoped>

</style>