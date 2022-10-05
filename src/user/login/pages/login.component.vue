<template>
  <pv-toast />
  <div class="h-screen flex flex-column align-items-center justify-content-center bg-blue-50 ">
    <div class="bg-blue-100 p-5 border-round border-1 border-solid">
      <div class="text-center">
        <div class="text-900 text-5xl font-bold">Welcome</div>
        <div class="text-900 text-5xl font-bold">to</div>
        <pv-img src="https://i.postimg.cc/mrsLXChs/e-Rent-Car-removebg-preview.png" height="50" class=""/>
      </div>

      <div class="mt-2">
        <form @submit.prevent="handleSubmit(!v$.$invalid)">
          <div class="p-inputgroup mb-3">
                  <span class="p-inputgroup-addon ">
                    <i class="pi pi-user"></i>
                  </span>
            <pv-input-text id="loginEmail" v-model="email" :class="{ 'p-invalid': v$.email.$invalid && submitted }"  placeholder="Email" />
          </div>
          <!--
          <label for="email" class="block text-900 front-medium mb-2">Email</label>
          <pv-input-text id="loginEmail" v-model="email" :class="{ 'p-invalid': v$.email.$invalid && submitted }" class="w-full" />
          <small v-show="!v$.email.$model && submitted" class="p-error">Email is required.</small>
          -->
          <div class="p-inputgroup">
                  <span class="p-inputgroup-addon ">
                    <i class="pi pi-key"></i>
                  </span>
            <pv-password id="loginPassword" v-model="password" :class="{ 'p-invalid': v$.password.$invalid && submitted }" :feedback="false" toggleMask placeholder="Password"/>
          </div>
          <!--
          <label for="password" class="block text-900 front-medium mb-2">Password</label>
          <pv-input-text id="loginPassword" v-model="password" :class="{ 'p-invalid': v$.password.$invalid && submitted }" class="w-full" :feedback="false"/>
          <small v-show="!v$.password.$model && submitted" class="p-error">Password is required.</small>
          -->
          <div class = "container-buttons">
            <pv-button icon="pi pi-car" type="submit" class="p-button mr-6 "  label="Login"/>
            <pv-button icon="pi pi-arrow-right" iconPos="right" @click="$router.push('/register')" class = "p-button-secondary button" label="Register" />
          </div>
        </form>
      </div>
    </div>
  </div>
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
  data() {
    return {
      submitted: false,
      email: "",
      password: "",
      wrongEmailOrPassword: false,
    };
  },
  validations() {
    return {
      email: {
        required,
      },
      password: {
        required,
      },
    };
  },
  methods: {
    submit() {
      this.form = { email: "", password: "" };
    },
    login(email, password) {
      const us = userStore();
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        life: 3000,
      });
      UsersApiService.getEmailAndPassword(email, password)
        .then((response) => {

          us.setUser(response.data);
          this.$router.push({ name: "cars" });

        })
        .catch((e) => {
          console.log(e);
        });
    },
    probando(){
      this.$toast.add({
        severity: "success",
        summary: "Success Message",
        detail: "Message Content",
        life: 3000,
      });
    },
    handleSubmit(isFormValid) {

      const us = userStore();

      this.submitted = true;
      if (isFormValid) {
        this.$toast.add({
          severity: "success",
          summary: "Success Message",
          detail: "Message Content",
          life: 3000,
        });
        usersApiService
          .getEmailAndPassword(this.email, this.password)
          .then((response) => {

            us.setUser(response.data);
            this.$router.push({ name: "cars" });
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Error Message",
          detail: "Verify fields to log in.",
          life: 3000,
        });
      }
    },
    loginDto() {
      return {
        email: this.email,
        password: this.password,
      };
    },
  },
};
</script>

<style scoped>
.container-buttons {
  margin-top: 15px;
}
@media screen and (min-width: 320px) and (max-width: 540px) {
  .container-buttons {
    display: flex;
    height: 100px;
    flex-direction: column;
  }
  .button {
    margin-top: 15px;
  }
  .size-100 {
    width: 100%;
  }
}
</style>
