<template>
    <div class="text-center">
        <v-dialog
            v-model="dialog"
            width="500"
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    dark
                    v-bind="attrs"
                    v-on="on"
                    @click="dialog = true"
                >
                    Update
                </v-btn>
            </template>

            <v-card>
                <v-card-title class = "ml-2">UPDATE</v-card-title>
                <v-card-text>
                    <v-row align="center" class="mx-0"></v-row>
                    <div class="container">
                        <div>
                            <label for="">Address: </label>
                            <input  type="text" v-model = carInfo.address>
                            <label for="">Brand: </label>
                            <input  type="text" v-model = carInfo.brand>
                            <label for="">Year: </label>
                            <input  type="number" v-model = carInfo.year>
                            <label for="">Model: </label>
                            <input type="text" v-model = carInfo.model>
                            <label for="">Milage: </label>
                            <input type="number" v-model = carInfo.mileage>
                            <label for="">Seating: </label>
                            <input  type="number" v-model = carInfo.seating>
                            <label for="">Manual: </label>
                            <input type="text" v-model = carInfo.manual>
                        </div>
                        <div>
                            <label  for="">Value in dollars: </label>
                            <input  type="number" v-model = carInfo.carValueInDollars >
                            <label for="">Extra information: </label>
                            <input  type="text" v-model = carInfo.extraInformation>
                            <label for="">Rate: </label>
                            <input  type="number" v-model = carInfo.rate>
                            <label for="">Amount day: </label>
                            <input  type="number" v-model = carInfo.rentAmountDay>
                            <label for="">URL: </label>
                            <input  type="text" v-model = carInfo.imagePath>
                            <label for="">Category: </label>
                            <input  type="text" v-model = carInfo.category>
                            <label for="">Mechanic conditions: </label>
                            <input type="text" v-model = carInfo.mechanicConditions>
                        </div>
                    </div>
                </v-card-text>
                <div class = "flex">
                    <v-btn color="primary margin" class = "size-button" @click="updateInfo">Save Changes</v-btn>
                    <v-btn  color="red darken-2 margin" class = "size-button" text  @click="dialog = false">Close</v-btn>
                </div>
                <v-divider class="mx-4"></v-divider>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import {MycarsApiService} from "../services/mycars-api-service";
import Swal from "sweetalert2";
export default{
    name: "carupdate.component",
    data(){
        return{
            dialog: false,
        }
    },
    props: [
        "carInfo"
    ],
    methods:{
        updateInfo(){
            const myCarsService = new MycarsApiService();
            const data= JSON.parse(JSON.stringify(this.carInfo))
            myCarsService.updateById(this.carInfo.id, data).then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.dialog = false
            })
        }
    }
}

</script>
<style>
    .container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
    }
    .flex{
        margin-top: 10px;
        justify-content: center;
        display: flex;
        margin-bottom: 10px;
    }
    .size-button{
        width: 200px;
    }
    input{
        border: 2px solid #DDDFE2;
        border-radius: 4px;
        outline: none;
    }
    input:focus{
        border: 2px solid #1266F1;
    }
    .text-subtitle-1 span{
        font-weight: bold;
    }
    .margin{
        margin: 0 10px 10px 10px;
    }
</style>