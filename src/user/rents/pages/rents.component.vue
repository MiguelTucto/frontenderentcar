<template>
    <NavbarComponent />
    <h1>Rented Cars</h1>
    <ListrentsComponent @clickedSecond = "onClickChildParent"  :listdata = "cars" />
</template>
<script>

import NavbarComponent from "../../../components/navbar.component.vue";
import {RentsCarsApiService} from "../services/rentscars-api-service";
import { userStore } from "@/user/login/stores/user-store";
import ListrentsComponent from "./listrents.component.vue";
export default{
    name: "rents.component",
    data(){
        return{
            user: null,
            rentsService: null,
            cars: []
        }
    },
    components: {
        NavbarComponent,
        ListrentsComponent
    },
    created(){
        this.user = userStore();
        this.rentsService = new RentsCarsApiService();
        this.rentsService.getRentsByUserId(this.user.id).then((response) => {
            let data =  response.data.content
            for(let i = 0; i < data.length; i++){
                this.rentsService.getInfoCarById(data[i].carId).then((response) => {
                    response.data.idRent = data[i].id
                    this.cars.push(response.data)
                })
            }
        })
    },
    methods: {
        onClickChildParent(idCar){
            console.log("ID PARENT", idCar)
            if(this.cars.length == 1){
                this.cars = []
            }
            else{
                this.cars = this.cars.filter(car => car.id != idCar);
            }
        }
    }
}
</script>
<style scoped>
h1{
    text-align: center;
}
</style>