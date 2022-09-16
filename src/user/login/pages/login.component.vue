<template>
  <v-container fluid class="d-flex flex-column mt-5 container text-center align-content-center bg-blue-lighten-5 w-50 rounded-xl">
    <v-container>
      <v-img src="src/assets/img/eRentCar-removebg-preview.png" max-width="200px" class="mx-auto mt-10">
      </v-img>
    </v-container>
    <v-container>
      <h2 class="">Welcome to eRentCar</h2>
      <v-form v-model="form.isValid">
        <v-text-field label="Email" v-model="form.email"  outlined shaped></v-text-field>
        <v-text-field label="Password" v-model="form.password" filled shaped></v-text-field>
        <div class="flex-column my-5">
          <v-divider></v-divider>
          <p class="text-center grey--text">Or</p>
        </div>
        <div class="d-flex">
          <a>I forgot my password</a>
          <v-spacer></v-spacer>
          <v-btn color="blue" :disabled="!this.form.isValid" @click="login()">Login</v-btn>
        </div>
      </v-form>
    </v-container>
  </v-container>
</template>

<script>
import UsersApiService from "@/user/subscription/services/users-api.service";
import usersApiService from "@/user/subscription/services/users-api.service";

export default {
  name: "login.component",
  data(){
    return {
      form: {
        email: "",
        password: "",
        isValid: false
      },
      wrongEmailOrPassword: false
    }
  },
  created() {
    usersApiService.getEmailAndPassword(this.form.email, this.form.password);
  },
  methods: {
    submit(){
      this.form = { email: "", password: "" };
    },
    login() {
      let noLogin = true;

      UsersApiService.getEmailAndPassword(this.form.email, this.form.password)
        .then(response => {
          if (response.data.length !== 0) {
            localStorage.setItem('clientId', response.data[0].id.toString());
            noLogin = false;
            this.$router.push("/subscription");
          }
        })
        .catch(e => {
          console.log(e);
        })
      if (noLogin) {
        this.wrongEmailOrPassword = true;
      } else{
        this.submit();
      }
    }
  }
};
</script>

<style scoped>

</style>