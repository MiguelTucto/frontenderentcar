<template>
  <v-container fluid class="d-flex flex-column mt-5 container text-center align-content-center bg-blue-lighten-5 w-50 rounded-xl">
    <v-container>
      <v-img src="src/assets/img/eRentCar-removebg-preview.png" max-width="200px" class="mx-auto mt-10">
      </v-img>
    </v-container>
    <v-container>
      <h2 class="">Welcome to eRentCar</h2>
      <form @submit.prevent="handleSubmit(!v$.$invalid)">
        <label for="email" class="block text-900 front-medium mb-2">Email</label>
        <pv-input-text v-model="email" :class="{ 'p-invalid': v$.email.$invalid && submitted }" class="w-full" />
        <small v-show="!v$.email.$model && submitted" class="p-error">Email is required.</small>
        <label for="password" class="block text-900 front-medium mb-2">Password</label>
        <pv-input-text v-model="password" :class="{ 'p-invalid': v$.password.$invalid && submitted }" class="w-full" />
        <small v-show="!v$.password.$model && submitted" class="p-error">Password is required.</small>
          <div class = "container-buttons">
              <pv-button type="submit" class="p-button mr-5" label="Login"/>
              <pv-button @click="$router.push('/register')" label="Register" />
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

</style>