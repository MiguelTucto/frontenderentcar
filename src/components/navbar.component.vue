<template>
    <v-card>
        <v-toolbar color = "blue lighten-2">
            <v-toolbar-title>
                <v-img src="src/assets/img/eRentCar-removebg-preview.png" class = "style-logo"></v-img>
            </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-account</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon  @click="$router.push('/mycars')">mdi-home</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon @click="$router.push('/search-auto')">mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-star</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon  @click="$router.push('/login')">mdi-logout</v-icon>
            </v-btn>
        </v-toolbar>
    </v-card>
</template>
<script>
    export default {
        name: "navbar.component"
    }

</script>
<style scoped>
    .style-logo{
        width: 160px;
    }
</style>
