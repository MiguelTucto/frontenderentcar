<template>
  <v-card :loading="loading" class="mx-auto my-12 surface-200 hover:shadow-8 transition-duration-500" max-width="374">
    <pv-img height="250" v-bind:src="carInfo.imagePath" preview></pv-img>
    <v-card-title>{{ carInfo.address }}</v-card-title>
    <v-card-text>
      <v-row align="center" class="mx-0"></v-row>
      <div class="my-4 text-subtitle-1">Brand: {{ carInfo.brand }}</div>
      <div class="my-4 text-subtitle-1">
        Rent for day: {{ carInfo.rentAmountDay }}
      </div>
      <div>{{ carInfo.description }}</div>
      <pv-chip :label="owner.name" :image=" owner.imageUrl" style="background-color: #1266f1" class="text-800 font-semibold cursor text-white hover:bg-black-alpha-90 transition-colors transition-duration-500 hover:text-blue-400" @click="showUser"/>
    </v-card-text>
    <v-divider class="mx-4"></v-divider>
    <v-card-actions>
      <CarCompleteComponent :carInfo="carInfo" />
      <div v-if="user.typeOfUser == 'Arrendatario'">
        <v-btn text @click="addCarsRents(user.id, carInfo.id)">Reserve</v-btn>
        <v-btn text @click="addFavourites(user.id, carInfo.id)"
          >Favorites</v-btn
        >
      </div>
    </v-card-actions>
  </v-card>
  <pv-dialog
    header="User Information"
    v-model:visible="displayUserInformation"
    :style="{ width: '450px' }"
    :modal="true"
    class="p-fluid">
    <pv-card>
      <template #header>
        <img :src='owner.imageUrl' />
      </template>
      <template #title>
        <h1 class="text-center text-900 ">{{ owner.name }}</h1>
      </template>
      <template #subtitle>
        <div class="flex flex-row justify-content-center align-items-center">
          <pv-badge :value=" client.length " size="large" severity="warning"></pv-badge>
          <h3 v-if="client.length === 1" class="pl-2">car publicated</h3>
          <h3 v-else class="pl-2">cars publicated</h3>
        </div>
      </template>
    </pv-card>
  </pv-dialog>

</template>

<script>
import CarCompleteComponent from "../../mycars/pages/carcomplete.component.vue";
import { userStore } from "@/user/login/stores/user-store";
import { MycarsApiService } from "@/user/mycars/services/mycars-api-service";
import { SearchAutoApiService } from "../services/search-auto-api-service";
import Swal from "sweetalert2";

export default {
  name: "car.component",
  data() {
    return {
      user: null,
      owner: {},
      client: {},
      dataReceived: [],
      serviceSearchAuto: null,
      carsService: null,
      displayUserInformation: false
    };
  },
  created() {
    this.user = userStore();
    this.serviceSearchAuto = new SearchAutoApiService();
    this.carsService = new MycarsApiService();
    this.serviceSearchAuto.getUsers(this.carInfo.userId).then((r) => {
      this.owner = r.data;
      console.log("probando");
      console.log(this.owner);
      this.carsService.getById(this.owner.id).then((re) => {
        this.client = re.data.content;
        console.log("probando1");
        console.log(this.client);
      })
    });

  },
  components: {
    CarCompleteComponent,
  },
  props: ["carInfo"],
  methods: {
    showUser(){
      this.displayUserInformation = true;

    },
    addFavourites(userId, carId) {
      this.serviceSearchAuto
        .addFavourite(userId, carId)
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Car added to favorites",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "There is an error",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    addCarsRents(userId, carId) {
      console.log(userId, carId);
      this.serviceSearchAuto
        .addRentCar(userId, carId)
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Car added to rents",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "There is an error",
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
  },
};
</script>

<style scoped>
  .cursor{
    cursor: pointer;
  }
</style>
