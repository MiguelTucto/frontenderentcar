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
            <v-btn
                text
            >
                Update
            </v-btn>
            <v-btn
                color="red lighten-2"
                text
                @click="this.deleteCar(carInfo.id)"
            >
                Delete
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import CarCompleteComponent from "./carcomplete.component.vue";
import  {MycarsApiService} from "../services/mycars-api-service";

    export default {
        name: "car.component",
        components: {
            CarCompleteComponent,
        },
        data(){
            return{
                carsService: null
            }
        },
        props: [
            "carInfo"
        ],
        methods:{
            deleteCar(idCar){
               this.carsService = new MycarsApiService()
                this.carsService.deleteById(idCar).then((response) => {
                    console.log(response);
                })
                this.$emit("clicked", idCar);
            }
        }
    }

</script>

<style scoped>

</style>
