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
                    More Details
                </v-btn>
            </template>

            <v-card>
                <v-img
                    v-bind:src = "carInfo.imagePath"
                ></v-img>

                <v-card-title>{{carInfo.address}}</v-card-title>
                <v-card-text>
                    <v-row align="center" class="mx-0"></v-row>
                    <div class="container">
                        <div class="flex">
                            <div class=" text-subtitle-1"><span>Brand</span>: {{carInfo.brand}}</div>
                            <div class=" text-subtitle-1"><span>Rent for day</span>: {{carInfo.rentAmountDay}}</div>
                        </div>
                        <div class="flex">
                            <div class=" text-subtitle-1"><span>Year</span>: {{carInfo.year}}</div>
                            <div class=" text-subtitle-1"><span>Model</span>: {{carInfo.model}}</div>
                        </div>
                        <div class="flex">
                            <div class=" text-subtitle-1"><span>Mileage</span>: {{carInfo.mileage}}</div>
                            <div class=" text-subtitle-1"><span>Seating</span>: {{carInfo.seating}}</div>
                        </div>
                        <div class="flex">
                            <div class=" text-subtitle-1"><span>Value in dollar</span>: ${{carInfo.carValueInDollars}}</div>
                            <div class=" text-subtitle-1"><span>Conditions</span>: {{carInfo.mechanicConditions}} </div>
                        </div>
                        <div class="flex">
                            <div class=" text-subtitle-1"><span>Category</span>: {{carInfo.category}} </div>
                            <div class=" text-subtitle-1"> <span>Extra information</span>: {{carInfo.extraInformation}}</div>
                        </div>
                    </div>
                </v-card-text>
                <v-btn  color="primary margin" text  @click="dialog = false">Close</v-btn>
                <v-divider class="mx-4"></v-divider>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>

export default {
    name: "carcomplete.component",
    components: {
    },
    data(){
      return{
          dialog: false
      }
    },
    props: [
        "carInfo"
    ]
}

</script>

<style scoped>
    .container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 20px;
    }
    .flex{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
    }
    .text-subtitle-1 span{
        font-weight: bold;
    }
    .margin{
        margin: 0 10px 10px 10px;
    }
</style>
