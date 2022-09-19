<template>
    <NavbarComponent />
    <ListcarsComponent :listdata = "cars" />
</template>

<script>

import NavbarComponent from "../../../components/navbar.component.vue";
import ListcarsComponent from "./listcars.component.vue";
import {MycarsApiService} from "../services/mycars-api-service";

export default {
    name: "mycars.component",
    components: {
        ListcarsComponent,
        NavbarComponent
    },
    data(){
        return {
            cars: [],
            carsService: null
        }
    },
    created(){
        this.carsService = new MycarsApiService();
        this.carsService.getById(1).then((response) => {
            this.cars = response.data;
            console.log(this.cars)
        })
    },
    deleteCar(){
        console.log("Wii")
        this.carsService.delete(this.car.id).then((response) => {
            this.cars = this.cars.filter((car) => car.id !== this.car.id);
            console.log(response);
        })
    }
}

</script>

<style scoped>

</style>
