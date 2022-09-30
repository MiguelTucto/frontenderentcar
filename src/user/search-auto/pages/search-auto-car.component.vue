<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="374">
        <v-img
            height="250"
            v-bind:src = "carInfo.imagePath"
        ></v-img>
        <v-card-title>{{carInfo.address}}</v-card-title>
        <v-card-text>
            <v-row align="center" class="mx-0"></v-row>
            <div class="my-4 text-subtitle-1">Brand: {{carInfo.brand}}</div>
            <div class="my-4 text-subtitle-1">Rent for day: {{carInfo.rentAmountDay}}</div>
            <div>{{carInfo.description}}</div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
            <CarCompleteComponent :carInfo = "carInfo"  />
            <div v-if = "user.typeOfUser == 'Arrendatario'">
                <v-btn text @click = "addCarsRents(user.id, carInfo.id)">Reserve</v-btn>
                <v-btn text @click = "addFavourites(user.id, carInfo.id)">Favorites</v-btn>
            </div>
        </v-card-actions>
    </v-card>
</template>

<script>
import CarCompleteComponent from "../../mycars/pages/carcomplete.component.vue";
import { userStore } from "@/user/login/stores/user-store";
import {SearchAutoApiService} from "../services/search-auto-api-service";
import Swal from "sweetalert2";

export default {
    name: "car.component",
    data(){
      return{
          user: null,
          serviceSearchAuto: null
      }
    },
    created(){
         this.user = userStore();
        this.serviceSearchAuto = new SearchAutoApiService();
    },
    components: {
        CarCompleteComponent
    },
    props: [
        "carInfo"
    ],
    methods:{
        addFavourites(userId, carId){
            this.serviceSearchAuto.addFavourite(userId, carId).then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Car added to favorites',
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'There is an error',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
        },
         addCarsRents(userId, carId){
            console.log(userId, carId)
             this.serviceSearchAuto.addRentCar(userId, carId).then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Car added to rents',
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch((error) => {
                 Swal.fire({
                     icon: 'error',
                     title: 'There is an error',
                     showConfirmButton: false,
                     timer: 1500
                 })
             })
        }
    }
}

</script>

<style scoped>

</style>
