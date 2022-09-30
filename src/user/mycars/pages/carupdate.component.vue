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
                            <v-text-field
                                label="Address"
                                v-model = "carInfo.address"
                                disabledhint="edit names">
                            </v-text-field>
                            <v-text-field
                                label="Brand"
                                v-model = "carInfo.brand"
                                disabledhint="edit names">
                            </v-text-field>
                            <v-text-field
                                label="Year"
                                v-model = "carInfo.year"
                                disabledhint="edit names">
                            </v-text-field>
                            <v-text-field
                                label="Model"
                                v-model = "carInfo.model"
                                disabledhint="edit names">
                            </v-text-field>
                            <v-text-field
                                label="Milage"
                                v-model = "carInfo.milage"
                                disabledhint="edit names">
                            </v-text-field>
                            <v-text-field
                                label="Seating"
                                v-model = "carInfo.seating"
                                disabledhint="edit names">
                            </v-text-field>
                            <v-text-field
                                label="Manual"
                                v-model = "carInfo.manual"
                                disabledhint="edit names">
                            </v-text-field>
                        </div>
                        <div>
                            <v-text-field
                                label="Value in dollars"
                                v-model = "carInfo.carValueInDollars"
                                disabledhint="edit names">
                            </v-text-field>
                            <v-text-field
                                label="Extra information"
                                v-model = "carInfo.extraInformation"
                                disabledhint="edit names">
                            </v-text-field>
                            <v-text-field
                                label="Rate"
                                v-model = "carInfo.rate"
                                disabledhint="edit names">
                            </v-text-field>
                            <v-text-field
                                label="Amount day"
                                v-model = "carInfo.rentAmountDay"
                                disabledhint="edit names">
                            </v-text-field>
                            <v-text-field
                                label="URL"
                                v-model = "carInfo.imagePath"
                                disabledhint="edit names">
                            </v-text-field>
                            <v-text-field
                                label="Category"
                                v-model = "carInfo.category"
                                disabledhint="edit names">
                            </v-text-field>
                            <v-text-field
                                label="Mechanic conditions"
                                v-model = "carInfo.mechanicConditions"
                                disabledhint="edit names">
                            </v-text-field>
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
                    title: 'Your info has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.dialog = false
            }).catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'There is an error',
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