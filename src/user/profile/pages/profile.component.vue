<template>
  <NavbarComponent />
  <v-dialog v-model="dialog" max-width="600px" heigth="800px">
    <v-card-text style="align-content: center; align-items: center">
      <div class="align-content-center">
        <v-container
          style="
            background-color: WHITE;
            align-content: center;
            align-items: center;
          "
        >
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <h2 class="ml-2 mb-2">Edit Profile</h2>
              <v-text-field
                label="Name"
                v-model="user.name"
                disabledhint="edit names"
                class="input-profile"
              ></v-text-field>
              <v-text-field
                label="LastName"
                v-model="user.lastName"
                disabledhint="edit names"
                class="input-profile"
              ></v-text-field>
              <v-text-field
                label="Phone"
                v-model="user.phone"
                disabledhint="edit names"
                class="input-profile"
              ></v-text-field>
              <v-text-field
                label="Email"
                v-model="user.email"
                disabledhint="edit names"
                class="input-profile"
              ></v-text-field>
              <v-text-field
                label="Password"
                v-model="user.password"
                disabledhint="edit names"
                class="input-profile"
              ></v-text-field>

              <v-text-field
                label="Image profile"
                v-model="user.imageUrl"
                disabledhint="edit names"
                class="input-profile"
                required
              ></v-text-field>
              <v-card-actions class="container-buttons">
                <v-btn
                  style="color: white; background-color: #0869a6"
                  @click="edit"
                  >Update</v-btn
                >
                <v-btn
                  style="color: white; background-color: #0869a6"
                  @click="close"
                  >Close</v-btn
                >
              </v-card-actions>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-card-text>
  </v-dialog>
  <v-card  class="mx-auto my-12" max-width="374">
    <template v-slot:progress>
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img height="250" v-bind:src="this.user.imageUrl"></v-img>

    <v-card-title>Name: {{ this.user.name }} </v-card-title>
    <v-card-title>LastName: {{ this.user.lastName }} </v-card-title>
    <v-card-title>Email: {{ this.user.email }}</v-card-title>
    <v-card-title>Phone: {{ this.user.phone }} </v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="openDialog">
        Update info
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import NavbarComponent from "../../../components/navbar.component.vue";
import UsersApiService from "@/user/subscription/services/users-api.service";
import { userStore } from "@/user/login/stores/user-store";
import Swal from "sweetalert2";

export default {
  name: "profile.component",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      user: {},
      usersService: UsersApiService,
      dialog: false,
    };
  },
  created() {
    const us = userStore();
    this.usersService.getById(us.id).then((response) => {
      this.user = response.data;
      console.log(response.data);
    });
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    edit() {
      this.usersService.update(this.user.id, this.user).then((response) => {
        Swal.fire({
          icon: "success",
          title: "Your info has been updated",
          showConfirmButton: false,
          timer: 1500,
        });
        this.dialog = false;
      });
    },
    close() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
.input-profile {
  width: 530px;
}
.container-buttons {
  width: 540px;
  display: flex;
  justify-content: center;
}
</style>
