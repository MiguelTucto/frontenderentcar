<template>
    <NavbarComponent />
    <h1 class = "title">Add a car</h1>
    <div class="container-add-car">
        <div class = "form">
            <div class = container-cars-items>
                <div>
                    <label for="">Address: </label>
                    <input v-model = "this.car.address" type="text">
                    <label for="">Brand: </label>
                    <input v-model = "this.car.brand" type="text">
                    <label for="">Year: </label>
                    <input v-model = "this.car.year" type="number">
                    <label for="">Model: </label>
                    <input v-model = "this.car.model" type="text">
                    <label for="">Milage: </label>
                    <input v-model = "this.car.mileage" type="number">
                    <label for="">Seating: </label>
                    <input v-model = "this.car.seating" type="number">
                    <label for="">Manual: </label>
                    <input v-model = "this.car.manual" type="text">
                </div>
                <div>
                    <label  for="">Value in dollars: </label>
                    <input v-model = "this.car.carValueInDollars" type="number">
                    <label for="">Extra information: </label>
                    <input v-model = "this.car.extraInformation" type="text">
                    <label for="">Rate: </label>
                    <input v-model = "this.car.rate" type="number">
                    <label for="">Amount day: </label>
                    <input v-model = "this.car.rentAmountDay" type="number">
                    <label for="">URL: </label>
                    <input v-model = "this.car.imagePath" type="text">
                    <label for="">Category: </label>
                    <input v-model = "this.car.category" type="text">
                    <label for="">Mechanic conditions: </label>
                    <input v-model = "this.car.mechanicConditions" type="text">
                </div>
            </div>
            <div class="container-button">
                <input class = "button" @click = "createCar" type="submit" value = "Send">
            </div>
        </div>
    </div>
</template>
<script>
import NavbarComponent from "../../../components/navbar.component.vue";
import {AddCarApiService} from "../services/addcar-api-service";
import { userStore } from "@/user/login/stores/user-store";


export default{
    name: "addcar.component",
    components:{
        NavbarComponent
    }   ,
    data(){
        return{
            user: {},
            car: {
                "address": "",
                "brand": "",
                "year": 0,
                "model": "",
                "mileage": 0,
                "seating": 0,
                "manual": "",
                "carValueInDollars": 0,
                "extraInformation": "",
                "rate": 0,
                "rentAmountDay": 0,
                "imagePath": "",
                "category": "",
                "mechanicConditions": ""
            }
        }
    },
    created(){
        this.user = userStore();
    },
    methods:{
        createCar(){
            const carService = new AddCarApiService();
            console.log(JSON.parse(JSON.stringify(this.car)))
            carService.create(this.user.id, JSON.parse(JSON.stringify(this.car))).then((response) => {
                console.log("la", response)
                alert("Car added successfully!!")
                this.car = {
                    "address": "",
                    "brand": "",
                    "year": 0,
                    "model": "",
                    "mileage": 0,
                    "seating": 0,
                    "manual": "",
                    "carValueInDollars": 0,
                    "extraInformation": "",
                    "rate": 0,
                    "rentAmountDay": 0,
                    "imagePath": "",
                    "category": "",
                    "mechanicConditions": ""
                }
            })
            console.log("Wii", this.user.id)
        }
    }
}

</script>
<style>
.title{
    text-align: center;
}
.container-add-car{
    display: flex;
    justify-content: center;
    height: 100vh;
}
.form{
    width: 500px;
    height: 440px;
    padding: 10px;
    margin-top: 10px;
}
label{
    display: block;
}
input{
    border: 2px solid #DDDFE2;
    border-radius: 4px;
    outline: none;
}
input:focus{
    border: 2px solid #1266F1;
}
.container-cars-items{
    display: flex;
    justify-content: space-between;
}
.container-button{
    display: flex;
    justify-content: center;
    width: 100%;
}
.button{
    margin-top: 10px;
    padding: 10px;
    width:200px;
    color: white;
    border: none;
    font-weight: bold;
    background-color: #1266F1;
}

</style>