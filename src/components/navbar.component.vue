<template>
    <v-card

    >
        <v-toolbar

        >
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>My cars</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>

            <v-btn icon>
                Logout
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

</style>
