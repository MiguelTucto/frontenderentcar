<template>
  <ul class="container">
    <li v-for="car in listdata">
      <CarComponent :carInfo="car" @clicked="onClickChild" />
    </li>
  </ul>
</template>
<script>
import CarComponent from "../../mycars/pages/car.component.vue";
export default {
  name: "listrents.component",
  data() {
    return {};
  },
  props: ["listdata"],
  components: {
    CarComponent,
  },
  methods: {
    onClickChild(idCar) {
      this.$emit("clickedSecond", idCar);
    },
  },
};
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 500px));
}
li {
  list-style: none;
}
</style>
