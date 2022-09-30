<template>
    <v-card>
        <v-toolbar color = "blue lighten-2">
            <v-toolbar-title>
                <v-img src="https://i.postimg.cc/mrsLXChs/e-Rent-Car-removebg-preview.png" class = "style-logo"></v-img>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon >
                <v-icon @click="$router.push('/profile')">mdi-account</v-icon>
            </v-btn>
            <div v-if = "this.user.typeOfUser == 'Arrendador'">
                <v-btn icon>
                    <v-icon  @click="$router.push('/mycars')">mdi-home</v-icon>
                </v-btn>
            </div>
            <div v-if = "this.user.typeOfUser == 'Arrendatario'">
                <v-btn icon>
                    <v-icon  @click="$router.push('/rents')">mdi-home</v-icon>
                </v-btn>
            </div>
            <div v-if = "this.user.typeOfUser == 'Arrendador' ">
                <v-btn icon>
                    <v-icon  @click="$router.push('/add-car')">mdi-plus-circle</v-icon>
                </v-btn>
            </div>
            <v-btn icon>
                <v-icon @click="$router.push('/search-auto')">mdi-magnify</v-icon>
            </v-btn>
            <div v-if = "this.user.typeOfUser == 'Arrendatario'">
                <v-btn icon>
                    <v-icon  @click="$router.push('/favourite')">mdi-star</v-icon>
                </v-btn>
            </div>
            <v-btn icon>
                <v-icon  @click="$router.push('/login')">mdi-logout</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>
<script>
import { userStore } from "@/user/login/stores/user-store";
    export default {
        name: "navbar.component",
        data(){
            return{
                user: {}
            }
        },
        created(){
            this.user = userStore();
        }
    }

</script>
<style scoped>
    .style-logo{
        width: 160px;
    }
</style>
