<template>
    <NavbarComponent />
  <v-row justify = "center">
    <v-dialog
      v-model="dialog"
      max-width="600px"
      heigth="500px"
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
                label="names"
                v-model="edit_names"
                disabledhint="edit names"
              ></v-text-field>

              <v-text-field
                label="address"
                v-model="edit_address"
                disabledhint="edit names"
                required
              ></v-text-field>

              <v-text-field
                label="cellphone"
                v-model="edit_cellphone"
                disabledhint="edit names"
                required
              ></v-text-field>

              <v-text-field
                label="image"
                v-model="edit_url_image"
                disabledhint="edit names"
                required
              ></v-text-field>

            </v-col>
          </v-row>
        </v-container>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn style="color:white;background-color: #0869A6" @click="update(edit_names,edit_address,edit_cellphone,edit_url_image)">Update</v-btn>
        <v-btn style="color:white;background-color: #0869A6" @click="close">Close</v-btn>
      </v-card-actions>

    </v-dialog>
  </v-row>

  <v-card class="mx-auto" max-width="1000" style="height:430px;background-color: #30A8F2; margin-top: 10% ">

    <div style="z-index: 2; position:absolute;align-content: center;align-items: center ;top: 130px; margin-left: 2.5%;width: 95%; height: 100%">
      <v-list style="background-color:transparent; width: 100%" class="text-sm-left">
        <v-list-item size="100" style="margin-left: 34%">
          <v-img  :src="this.imagePath" alt="image of user"
                  max-height="220px"
                  max-width="250px"
                  class="align-content-center"

          ></v-img>

        </v-list-item>
        <h5 class="text-center">{{this.names}}</h5>
        <v-list-item-subtitle class="text-center"> {{this.address}}</v-list-item-subtitle>
        <v-list-item-subtitle class="text-center"> {{this.cellphoneNumber}}</v-list-item-subtitle>
      </v-list>

    </div>
    <v-card-actions>

        <v-btn style="margin-top: 50px; background-color: #DE5907;color:white;margin-left: 42%" @click="edit"> Edit profile</v-btn>


    </v-card-actions>
  </v-card>

</template>

<script>
import UserService from "/src/user/profile/services/user.service";
import NavbarComponent from "../../../components/navbar.component.vue";
export default {
  name: "profile",
  data:()=>({
    imagePath: "https://cdn.smehost.net/sonymusiccommx-mxprod/wp-content/uploads/2020/10/Harry_Styles.jpg",
    names: "",
    address: "",
    cellphoneNumber: "",
    responseTime: "",
    averageResponsibility: "",
    storageUser:-1,
    currentUser:-1,
    clientUsers:"",
    dialog: false,
    edit_names:"New names",
    edit_address:"New cellphone",
    edit_url:"New url",
    edit_cellphone:946401245,
    edit_url_image: "https://cdn.smehost.net/sonymusiccommx-mxprod/wp-content/uploads/2020/10/Harry_Styles.jpg"
  }),
  methods:{
    retrieveUsers(){
      //this.storageUser = UserService.getCurrentUser();
      this.currentUser = JSON.parse(localStorage.getItem('user')).id;
      UserService.getUserById(this.currentUser)
      .then((response) => {
        this.imagePath = response.data.imagePath;
        this.names = response.data.names;
        this.address = response.data.address;
        this.cellphoneNumber = response.data.cellphoneNumber;
        this.responseTime = response.data.responseTime;
        this.averageResponsibility = response.data.averageResponsibility;

      })
    },
    edit(){
      this.dialog = true;
    },
    update(edit_names,edit_address,edit_cellphone,edit_url_image){
      this.imagePath = edit_url_image;
      this.names = edit_names;
      this.address = edit_address;
      this.cellphoneNumber = edit_cellphone;
      this.currentUser = JSON.parse(localStorage.getItem('user')).id;
      UserService.updateUserById(this.currentUser,{edit_url_image,edit_names,edit_address,edit_cellphone});
    },
    close(){
      this.dialog =false;
    }
  },
    components:{
      NavbarComponent
    },
  created(){
    this.retrieveUsers();
  },
  mounted() {
    this.retrieveUsers();
  },
  updated(){
    UserService.storageUser = UserService.getCurrentUser()
  }
};
</script>

<style scoped>

</style>
