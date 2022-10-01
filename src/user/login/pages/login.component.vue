<template>
  <v-container fluid class="d-flex flex-column mt-5 container text-center align-content-center bg-blue-lighten-5 w-50 rounded-xl">
    <v-container>
      <v-img src="https://i.postimg.cc/mrsLXChs/e-Rent-Car-removebg-preview.png" max-width="200px" class="mx-auto mt-10">
      </v-img>
    </v-container>
    <v-container class="d">
      <h2 class="">Welcome to eRentCar</h2>
      <form @submit.prevent="handleSubmit(!v$.$invalid)">
        <div class="p-input-icon-right">
          <i class="pi pi-user mt-1"/>
          <label for="email" class="block text-900 front-medium mb-2">Email</label>
          <pv-input-text v-model="email" :class="{ 'p-invalid': v$.email.$invalid && submitted }" class="p-inputtext-sm" />
          <small v-show="!v$.email.$model && submitted" class="p-error">Email is required.</small>
        </div>
        <label for="password" class="block text-900 front-medium mb-2">Password</label>
        <pv-password v-model="password" :class="{ 'p-invalid': v$.password.$invalid && submitted }" class="" :feedback="false"/>
        <small v-show="!v$.password.$model && submitted" class="p-error">Password is required.</small>
        <div class = "container-buttons">
          <pv-button icon="pi pi-car" type="submit" class="p-button mr-5 size-100"  label="Login"/>
          <pv-button icon="pi pi-arrow-right" iconPos="right" @click="$router.push('/register')" class = "p-button-secondary" label="Register" />
        </div>
      </form>
    </v-container>
  </v-container>
</template>

<script>
import UsersApiService from "@/user/subscription/services/users-api.service";
import { userStore } from "@/user/login/stores/user-store";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import usersApiService from "@/user/subscription/services/users-api.service";
import router from "@/router";

export default {
  name: "login.component",
  setup: () => ({ v$: useVuelidate() }),
  userStore: null,
  data(){
    return {
      submitted: false,
      email: "",
      password: "",
      wrongEmailOrPassword: false
    };
  },
  validations() {
    return {
      email: {
        required
      },
      password: {
        required
      }
    };
  },
  methods: {
    submit(){
      this.form = { email: "", password: "" };
    },
    login(email, password) {
      const us = userStore();
      UsersApiService.getEmailAndPassword(email, password)
        .then((response) => {
          us.setUser(response.data)
          this.$router.push({ name: "cars"});
        })
        .catch((e) => {
          console.log(e);
        });
    },
    handleSubmit(isFormValid) {
      const us = userStore();

      this.submitted = true;
      if (isFormValid) {
        usersApiService
          .getEmailAndPassword(this.email, this.password)
          .then((response) => {
            us.setUser(response.data)
            this.$router.push({ name: "cars" })
          })
          .catch((e) => {
            console.log(e);
          });

      }
    },
    loginDto() {
      return {
        email: this.email,
        password: this.password
      };
    }
  }
};
</script>

<style scoped>
.container-buttons{
    margin-top: 15px;
}
@media screen and (min-width: 320px) and (max-width: 540px){
    .container-buttons{
        display: flex;
        height: 100px;
        flex-direction: column;
    }
    .size-100{
        width: 100%;
    }
}

</style>