<template>
    <NavbarComponent />
    <pv-toast position="top-right"/>
    <div class="container">
      <div class="flex flex-column justify-content-center align-items-center">
        <pv-card class="mt-5 surface-card shadow-5">
          <template v-slot:title>
            <div class="text-center">Register your car</div>
          </template>
          <template v-slot:content>
            <form @submit.prevent="handleSubmit(!v$.$invalid)">
              <div>
                <label for="address" class="block text-900 font-medium mb-2">Address</label>
                <pv-input-text
                  id="registerAddress"
                  v-model="address"
                  :class="{'p-invalid': v$.address.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="address"
                />
                <small v-show="!v$.address.$model && submitted" class="p-error">Brand is required</small>
                <label for="brand" class="block text-900 font-medium mb-2">Brand</label>
                <pv-input-text
                  id="registerBrand"
                  v-model="brand"
                  :class="{'p-invalid': v$.brand.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="brand"
                />
                <small v-show="!v$.brand.$model && submitted" class="p-error">Brand is required</small>
                <label for="year" class="block text-900 font-medium mb-2">Year</label>
                <pv-input-text
                  id="registerYear"
                  v-model="year"
                  :class="{'p-invalid': v$.year.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="year"
                />
                <small v-show="!v$.year.$model && submitted" class="p-error">Year is required</small>
                <label for="model" class="block text-900 font-medium mb-2">Model</label>
                <pv-input-text
                  id="registerModel"
                  v-model="model"
                  :class="{'p-invalid': v$.model.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="year"
                />
                <small v-show="!v$.model.$model && submitted" class="p-error">Model is required</small>
                <label for="mileage" class="block text-900 font-medium mb-2">Mileage</label>
                <pv-input-text
                  id="registerMileage"
                  v-model="mileage"
                  :class="{'p-invalid': v$.mileage.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="mileage"
                />
                <small v-show="!v$.mileage.$model && submitted" class="p-error">Mileage is required</small>
                <label for="seating" class="block text-900 font-medium mb-2">Seating</label>
                <pv-input-text
                  id="registerSeating"
                  v-model="seating"
                  :class="{'p-invalid': v$.seating.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="seating"
                />
                <small v-show="!v$.seating.$model && submitted" class="p-error">Seating is required</small>
                <label for="manual" class="block text-900 font-medium mb-2">Manual</label>
                <pv-input-text
                  id="registerManual"
                  v-model="manual"
                  :class="{'p-invalid': v$.manual.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="manual"
                />
                <small v-show="!v$.manual.$model && submitted" class="p-error">Manual is required</small>
                <label for="carValueInDollars" class="block text-900 font-medium mb-2">Car Value in Dollars</label>
                <pv-input-text
                  id="registerCarValueInDollars"
                  v-model="carValueInDollars"
                  :class="{'p-invalid': v$.carValueInDollars.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="carValueInDollars"
                />
                <small v-show="!v$.carValueInDollars.$model && submitted" class="p-error">Value is required</small>
                <label for="extraInformation" class="block text-900 font-medium mb-2">Extra Information</label>
                <pv-input-text
                  id="registerExtraInformation"
                  v-model="extraInformation"
                  :class="{'p-invalid': v$.extraInformation.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="extraInformation"
                />
                <small v-show="!v$.extraInformation.$model && submitted" class="p-error">Information is required</small>
                <label for="rate" class="block text-900 font-medium mb-2">Rate</label>
                <pv-input-text
                  id="registerRate"
                  v-model="rate"
                  :class="{'p-invalid': v$.rate.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="rate"
                />
                <small v-show="!v$.rate.$model && submitted" class="p-error">Rate is required</small>
                <label for="rentAmountDay" class="block text-900 font-medium mb-2">Rent per day</label>
                <pv-input-text
                  id="registerRentAmountDay"
                  v-model="rentAmountDay"
                  :class="{'p-invalid': v$.rentAmountDay.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="rentAmountDay"
                />
                <small v-show="!v$.rentAmountDay.$model && submitted" class="p-error">Rate is required</small>
                <label for="imagePath" class="block text-900 font-medium mb-2">Image URL</label>
                <pv-input-text
                  id="registerImageUrl"
                  v-model="imagePath"
                  :class="{'p-invalid': v$.imagePath.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="imagePath"
                />
                <small v-show="!v$.imagePath.$model && submitted" class="p-error">URL is required</small>
                <label for="category" class="block text-900 font-medium mb-2">Category</label>
                <pv-input-text
                  id="registerCategory"
                  v-model="category"
                  :class="{'p-invalid': v$.category.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="category"
                />
                <small v-show="!v$.category.$model && submitted" class="p-error">Category is required</small>
                <label for="mechanicConditions" class="block text-900 font-medium mb-2">Mechanic Conditions</label>
                <pv-input-text
                  id="registerMechanicConditions"
                  v-model="mechanicConditions"
                  :class="{'p-invalid': v$.mechanicConditions.$invalid && submitted }"
                  class="w-full"
                  aria-describedby="mechanicConditions"
                />
                <small v-show="!v$.mechanicConditions.$model && submitted" class="p-error">Mechanic Conditions is required</small>
                <div class="flex justify-content-center mt-3">
                  <pv-button
                    icon="pi pi-check"
                    type="submit"
                    label="Submit"
                  />
                </div>
              </div>
            </form>
          </template>
        </pv-card>
      </div>
    </div>

</template>

<script>

import NavbarComponent from "@/components/navbar.component.vue";
import { AddCarApiService } from "@/user/add-car/services/addcar-api-service";
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import { userStore } from "@/user/login/stores/user-store";
export default {
  name: "addcarv2.component",
  components: { NavbarComponent },
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      user: {},
      submitted: false,
      address: "",
      brand: "",
      year: null,
      model: "",
      mileage: null,
      seating: null,
      manual: "",
      carValueInDollars: null,
      extraInformation: "",
      rate: null,
      rentAmountDay: null,
      imagePath: "",
      category: "",
      mechanicConditions: "",
    }
  },
  validations() {
    return {
      address: {
        required
      },
      brand: {
        required
      },
      year: {
        required
      },
      model: {
        required
      },
      mileage: {
        required
      },
      seating: {
        required
      },
      manual: {
        required
      },
      carValueInDollars: {
        required
      },
      extraInformation: {
        required
      },
      rate: {
        required
      },
      rentAmountDay: {
        required
      },
      imagePath: {
        required
      },
      category: {
        required
      },
      mechanicConditions: {
        required
      }
    }
  },
  created() {
    this.user = userStore();
  },
  methods: {
    createCar(car) {
      console.log(car);
      const carValue = new AddCarApiService();
      if (!car) {
        carValue.create(this.user.id, JSON.parse(JSON.stringify(car)))
          .then(() => {
            this.$toast.add({
              severity: "success",
              summary: "Car posted",
              detail: "¡Car has been created successfully!",
              life: 3000,
            });
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Car Failed",
          detail: "Complete fields to register a car",
          life: 3000,
        });
      }

    },
    methodToCreateCar() {
      const car = {
        address: this.address,
        brand: this.brand,
        year: this.year,
        model: this.model,
        mileage: this.mileage,
        seating: this.seating,
        manual: this.manual,
        carValueInDollars: this.carValueInDollars,
        extraInformation: this.extraInformation,
        rate: this.rate,
        rentAmountDay: this.rentAmountDay,
        imagePath: this.imagePath,
        category: this.category,
        mechanicConditions: this.mechanicConditions
      };
      this.createCar(car);
    },
    handleSubmit() {
      this.submitted = true;
      this.methodToCreateCar();
    }
  }
};
</script>

<style scoped>

</style>