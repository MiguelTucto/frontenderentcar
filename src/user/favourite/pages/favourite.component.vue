<template>
  <NavbarComponent/>
  <div>{{ favourites }}</div>
</template>

<script>
import NavbarComponent from "../../../components/navbar.component.vue";
import { userStore } from "@/user/login/stores/user-store";
import { FavouritesApiService } from "@/user/favourite/services/favourites-api.service";
import { MycarsApiService } from "@/user/mycars/services/mycars-api-service";


export default {
  name: "favourite.component",
  components: {
    NavbarComponent
  },
  data(){
    return {
      favourites: {},
      cars: [],
      favouriteService: null,
      carservice: MycarsApiService
    }
  },
  created() {
    const us = userStore();
    this.favouriteService = new FavouritesApiService();
    this.favouriteService.getAllFarouties(us.id).then((response) => {
      this.favourites = response.data.content;
      })
  },
  getCars() {
    this.carservice = new MycarsApiService();
    this.carservice.getById(this.favourites.carId).then((response) => {
      this.cars = response.data.content;
    })
  }
};
</script>

<style scoped>

</style>