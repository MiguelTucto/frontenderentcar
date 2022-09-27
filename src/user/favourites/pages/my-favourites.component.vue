<template>
  <NavbarComponent />
  <div class = "flex-search">
    <v-text-field label="Your favourites..." class = "styles-input"></v-text-field>
  </div>
  <ul class = "container">
    <li v-for = "car in cars">
      <MyFavCarComponent :carInfo = "car" />
    </li>
  </ul>
</template>

<script>
  import NavbarComponent from "@/components/navbar.component.vue";
  import {FavouritesApiService} from "@/user/favourites/services/favourites-api.service";
  import MyFavCarComponent from "@/user/favourites/pages/my-fav-car.component.vue";
  import { userStore } from "@/user/login/stores/user-store";

  export default {
    name: "my-favourites.component",
    components:{
      NavbarComponent,
      MyFavCarComponent
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
                  this.cars.push(response.data);
              })
          }

      })
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
  .container{
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(220px, 500px) );
  }
</style>