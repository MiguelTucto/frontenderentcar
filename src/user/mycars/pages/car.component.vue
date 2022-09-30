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
            <div v-if = "this.user.typeOfUser =='Arrendador' ">
                <CarUpdateComponent :carInfo = "carInfo" />
            </div>
            <div v-if = "this.user.typeOfUser =='Arrendatario' ">
                <v-btn
                    color="red lighten-2"
                    text
                    @click="this.deleteRentCar(carInfo.idRent)"
                >
                    Delete Reservation
                </v-btn>
            </div>
            <div v-if =  "this.user.typeOfUser =='Arrendador' ">
                <v-btn
                    color="red lighten-2"
                    text
                    @click="this.deleteCar(carInfo.id)"
                >
                    Delete
                </v-btn>
            </div>
        </v-card-actions>
    </v-card>
</template>

<script>
import CarCompleteComponent from "./carcomplete.component.vue";
import CarUpdateComponent from "./carupdate.component.vue";
import  {MycarsApiService} from "../services/mycars-api-service";
import Swal from "sweetalert2";
import {userStore} from "../../login/stores/user-store";

export default {
        name: "car.component",
        components: {
            CarCompleteComponent,
            CarUpdateComponent
        },
        data(){
            return{
                user: null,
                carsService: null
            }
        },
        props: [
            "carInfo"
        ],
        created(){
            this.user = userStore();
            this.carsService = new MycarsApiService()
        },
        methods:{
            deleteCar(idCar){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.carsService.deleteById(idCar).then((response) => {
                            Swal.fire(
                                'Deleted!',
                                'Your car has been deleted.',
                                'success'
                            )
                            this.$emit("clicked", idCar);
                        })
                    }
                }).catch((error) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'There is an error',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
            },
            deleteRentCar(idCar){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.isConfirmed) {
                        this.carsService.deleteRentCarById(idCar).then((response) => {
                            Swal.fire(
                                'Deleted!',
                                'Your rent has been deleted.',
                                'success'
                            )
                            this.$emit("clicked", idCar);
                        })
                    }
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
