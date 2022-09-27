<template>
  <NavbarComponent />
  <div class = "flex-search">
    <v-text-field label="Your favourites..." class = "styles-input"></v-text-field>
  </div>
  <ul class = "container">
    <li v-for = "car in cars">
        <v-card class="mx-auto my-12" max-width="374">
            <v-img height="250" v-bind:src = "car.imagePath"></v-img>
            <v-card-title>{{car.address}}</v-card-title>
            <v-card-text>
                <v-row align="center" class="mx-0"></v-row>
                <div class="my-4 text-subtitle-1">Brand: {{car.brand}}</div>
                <div class="my-4 text-subtitle-1">Rent for day: {{car.rentAmountDay}}</div>
                <div>{{car.description}}</div>
            </v-card-text>
            <v-divider class="mx-4"></v-divider>
            <v-card-actions>
                <CarCompleteComponent :carInfo = "car"  />
                <v-btn text @click = "remove(car.idFavourite)">Remove</v-btn>
            </v-card-actions>
        </v-card>
    </li>
  </ul>
</template>

<script>
  import NavbarComponent from "@/components/navbar.component.vue";
  import {FavouritesApiService} from "@/user/favourites/services/favourites-api.service";
  import CarCompleteComponent from "../../mycars/pages/carcomplete.component.vue";
  import { userStore } from "@/user/login/stores/user-store";

  export default {
    name: "my-favourites.component",
    components:{
      NavbarComponent,
        CarCompleteComponent
    },
    data(){
      return {
        cars:[],
        favouriteCarService: null
      }
    },
    created(){
        const us = userStore();
      this.favouriteCarService = new FavouritesApiService();
      this.favouriteCarService.getAllByUser(us.id).then((response) => {
          let data = response.data.content;
          for(let i = 0; i < data.length; i++){
              this.favouriteCarService.getInfoCarById(data[i].carId).then((response) => {
                  response.data.idFavourite = data[i].id
                  this.cars.push(response.data);
              })
          }

      })
    },
      methods: {
          remove(id){
              this.favouriteCarService = new FavouritesApiService();
              this.favouriteCarService.deleteById(id).then((response) => {
                  this.cars = this.cars.filter(car => car.idFavourite != id);
              })

          }
      }
  }
</script>

<style scoped>
  .flex-search{
    display: flex;
    align-items: center;
    width: 60%;
  }
  .styles-input{
    margin-top: 20px;
    margin-left: 60px;
    width: 60%;
  }
  li{
      list-style: none;
  }
  .container{
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(220px, 500px) );
  }
</style>