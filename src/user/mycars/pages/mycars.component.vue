<template>
    <NavbarComponent />
    <div class="text-900 p-3 text-center">
      <h1>My Cars</h1>
    </div>
    <ListcarsComponent @clickedSecond="onClickChildParent" :listdata="cars" />
</template>

<script>
import NavbarComponent from "../../../components/navbar.component.vue";
import ListcarsComponent from "./listcars.component.vue";
import { MycarsApiService } from "../services/mycars-api-service";
import { userStore } from "@/user/login/stores/user-store";
export default {
  name: "mycars.component",
  components: {
    ListcarsComponent,
    NavbarComponent,
  },
  data() {
    return {
      cars: [],
      carsService: null,
    };
  },
  created() {
    const us = userStore();
    this.carsService = new MycarsApiService();
    this.carsService.getById(us.id).then((response) => {
      this.cars = response.data.content;
      console.log(response);
    });
  },
  methods: {
    onClickChildParent(idCar) {
      this.cars = this.cars.filter((car) => car.id != idCar);
    },
  },
};
</script>

<style scoped>
</style>
