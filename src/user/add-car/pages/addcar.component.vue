<template>
  <NavbarComponent />
  <h1 class="title">Add a car</h1>
  <div class="container-add-car">
    <div class="form">
      <div class="container-cars-items">
        <div class="container-inputs">
          <v-text-field
            id="createAddress"
            label="Address"
            v-model="this.car.address"
            disabledhint="edit names"
          >
          </v-text-field>
          <v-text-field
            id="createBrand"
            label="Brand"
            v-model="this.car.brand"
            disabledhint="edit names"
          >
          </v-text-field>
          <v-text-field
            label="Year"
            v-model="this.car.year"
            disabledhint="edit names"
          >
          </v-text-field>
          <v-text-field
            label="Model"
            v-model="this.car.model"
            disabledhint="edit names"
          >
          </v-text-field>
          <v-text-field
            label="Milage"
            v-model="this.car.milage"
            disabledhint="edit names"
          >
          </v-text-field>
          <v-text-field
            label="Seating"
            v-model="this.car.seating"
            disabledhint="edit names"
          >
          </v-text-field>
          <v-text-field
            label="Manual"
            v-model="this.car.manual"
            disabledhint="edit names"
          >
          </v-text-field>
        </div>
        <div class="container-inputs">
          <v-text-field
            label="Value in dollars"
            v-model="this.car.carValueInDollars"
            disabledhint="edit names"
          >
          </v-text-field>
          <v-text-field
            label="Extra information"
            v-model="this.car.extraInformation"
            disabledhint="edit names"
          >
          </v-text-field>
          <v-text-field
            label="Rate"
            v-model="this.car.rate"
            disabledhint="edit names"
          >
          </v-text-field>
          <v-text-field
            label="Amount day"
            v-model="this.car.rentAmountDay"
            disabledhint="edit names"
          >
          </v-text-field>
          <v-text-field
            label="URL"
            v-model="this.car.imagePath"
            disabledhint="edit names"
          >
          </v-text-field>
          <v-text-field
            label="Category"
            v-model="this.car.category"
            disabledhint="edit names"
          >
          </v-text-field>
          <v-text-field
            label="Mechanic conditions"
            v-model="this.car.mechanicConditions"
            disabledhint="edit names"
          >
          </v-text-field>
        </div>
      </div>
      <div class="container-button">
        <input class="button" @click="createCar" type="submit" value="Send" />
      </div>
    </div>
  </div>
</template>
<script>
import NavbarComponent from "../../../components/navbar.component.vue";
import { AddCarApiService } from "../services/addcar-api-service";
import { userStore } from "@/user/login/stores/user-store";
import Swal from "sweetalert2";

export default {
  name: "addcar.component",
  components: {
    NavbarComponent,
  },
  data() {
    return {
      user: {},
      car: {
        address: "",
        brand: "",
        year: 0,
        model: "",
        mileage: 0,
        seating: 0,
        manual: "",
        carValueInDollars: 0,
        extraInformation: "",
        rate: 0,
        rentAmountDay: 0,
        imagePath: "",
        category: "",
        mechanicConditions: "",
      },
    };
  },
  created() {
    this.user = userStore();
  },
  methods: {
    createCar() {
      const carService = new AddCarApiService();
      carService
        .create(this.user.id, JSON.parse(JSON.stringify(this.car)))
        .then((response) => {
          Swal.fire({
            icon: "success",
            title: "Car created!",
            showConfirmButton: false,
            timer: 1500,
          });
          this.car = {
            address: "",
            brand: "",
            year: 0,
            model: "",
            mileage: 0,
            seating: 0,
            manual: "",
            carValueInDollars: 0,
            extraInformation: "",
            rate: 0,
            rentAmountDay: 0,
            imagePath: "",
            category: "",
            mechanicConditions: "",
          };
        });
    },
  },
};
</script>
<style>
.title {
  text-align: center;
}
.container-inputs {
  width: 200px;
}
.container-add-car {
  display: flex;
  justify-content: center;
  height: 100vh;
}
.form {
  width: 500px;
  height: 440px;
  padding: 10px;
  margin-top: 10px;
}
label {
  display: block;
}
input {
  border: 2px solid #dddfe2;
  border-radius: 4px;
  outline: none;
}
input:focus {
  border: 2px solid #1266f1;
}
.container-cars-items {
  display: flex;
  justify-content: space-between;
}
.container-button {
  display: flex;
  justify-content: center;
  width: 100%;
}
.button {
  margin-top: 10px;
  padding: 10px;
  width: 200px;
  color: white;
  border: none;
  font-weight: bold;
  background-color: #1266f1;
}
</style>
