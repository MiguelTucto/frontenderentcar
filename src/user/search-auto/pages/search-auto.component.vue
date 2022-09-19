<template>
    <NavbarComponent />
    <ul class = "container">
        <li v-for = "car in cars">
            <SearchAutoCarComponent :carInfo = "car" />
        </li>
    </ul>

</template>
<script>
    import NavbarComponent from "../../../components/navbar.component.vue";
    import {SearchAutoApiService} from "../services/search-auto-api-service";
    import SearchAutoCarComponent from "./search-auto-car.component.vue";

    export default{
        name: "search-auto.component",
        components:{
            NavbarComponent,
            SearchAutoCarComponent
        },
        data(){
            return {
                cars: [],
                searchAutoService: null
            }
        },
        created(){
            this.searchAutoService = new SearchAutoApiService();
            this.searchAutoService.getAll().then((response) => {
                this.cars = response.data;
            })
        }
    }
</script>
<style>
    .container{
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(220px, 500px) );
    }
    li{
        list-style: none;
    }

</style>