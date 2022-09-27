<template>
    <NavbarComponent />
    <div class = "flex-search">
        <v-text-field label="Search your car..." v-model = "search" class = "styles-input"></v-text-field>
        <v-btn depressed color="primary" @click = "searchCar" class = "ml-15">Search</v-btn>
    </div>
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
                searchAutoService: null,
                search: ""
            }
        },
        created(){
            this.searchAutoService = new SearchAutoApiService();
            this.searchAutoService.getAll().then((response) => {
                this.cars = response.data.content;
            })
        },
        methods: {
            searchCar(){
                let carsSearch = this.cars.filter(car => car.brand.includes(this.search));
                this.cars = carsSearch
            }
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
    .flex-search{
        display: flex;
        align-items: center;
        width: 60%;
    }
    .ml-15{
        margin-left: 15px;
    }
    .styles-input{
        margin-top: 20px;
        margin-left: 60px;
        width: 60%;
    }

</style>