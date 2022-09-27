<template>
  <NavbarComponent/>
    <v-dialog
        v-model="dialog"
        max-width="600px"
        heigth="800px"
    >
        <v-card-text style="align-content: center;align-items: center">
            <div class="align-content-center">
                <v-container style="background-color:WHITE; align-content: center;align-items: center">
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-text-field
                                label="Name"
                                v-model="edit_names"
                                disabledhint="edit names"
                            ></v-text-field>
                            <v-text-field
                                label="LastName"
                                v-model="edit_names"
                                disabledhint="edit names"
                            ></v-text-field>
                            <v-text-field
                                label="Email"
                                v-model="edit_names"
                                disabledhint="edit names"
                            ></v-text-field>


                            <v-text-field
                                label="Image profile"
                                v-model="edit_url_image"
                                disabledhint="edit names"
                                required
                            ></v-text-field>
                            <v-card-actions>
                                <v-btn style="color:white;background-color: #0869A6" @click="update(edit_names,edit_address,edit_cellphone,edit_url_image)">Update</v-btn>
                                <v-btn style="color:white;background-color: #0869A6" @click="close">Close</v-btn>
                            </v-card-actions>

                        </v-col>
                    </v-row>
                </v-container>
            </div>
        </v-card-text>
    </v-dialog>
    <v-card
        :loading="loading"
        class="mx-auto my-12"
        max-width="374"
    >
        <template slot="progress">
            <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
            ></v-progress-linear>
        </template>

        <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>Name and lastname: {{this.user.name}} {{this.user.lastName}}</v-card-title>
        <v-card-title>Email: {{this.user.email}}</v-card-title>
        <v-divider class="mx-4"></v-divider>


        <v-card-actions>
            <v-btn
                color="deep-purple lighten-2"
                text
                @click = "edit"
            >
                Update info
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import NavbarComponent from "../../../components/navbar.component.vue";
import UsersApiService from "@/user/subscription/services/users-api.service";
import { userStore } from "@/user/login/stores/user-store";

export default {
  name: "profile.component",
  components: {
    NavbarComponent
  },
  data(){
    return {
      user: {},
      usersService: UsersApiService,
        dialog: false
    }
  },
  created() {
    const us = userStore();
    this.usersService.getById(us.id).then((response) => {
      this.user= response.data;
      console.log(response.data);
    })
  },
    methods:{
      edit(){
          this.dialog = true;
      },
        close(){
          this.dialog = false;
        }
    }
};
</script>

<style scoped>

</style>