<template>
    <NavbarComponent />
    <ListcarsComponent :listdata = "cars" />
</template>

<script>

import NavbarComponent from "../../../components/navbar.component.vue";
import ListcarsComponent from "./listcars.component.vue";
import {MycarsApiService} from "../services/mycars-api-service";
import { userStore } from "@/user/login/stores/user-store";
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
      const us = userStore();
        this.carsService = new MycarsApiService();
        this.carsService.getById(us.id).then((response) => {
            this.cars = response.data.content;
            console.log(response);
        })
    }
}

</script>

<style scoped>

</style>
