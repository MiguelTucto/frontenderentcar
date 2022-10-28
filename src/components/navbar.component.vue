<template>
  <pv-toast />
    <pv-toolbar class="border-none bg-blue-200">
      <template #start>
        <v-img
          src="https://i.postimg.cc/mrsLXChs/e-Rent-Car-removebg-preview.png"
          class="style-logo"
        ></v-img>
      </template>
      <template #end>
        <div class="flex flex-row gap-3" id="sidebar">
          <li>Bienvenido {{this.user.name}}</li>
          <pv-button @click="$router.push('/profile')" icon="pi pi-user" class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex " v-tooltip.bottom="'Profile'" />
          <div class="md:hidden appearance-none">
            <pv-menu ref="menu" :model="items" :popup="true"/>
            <i type="button" @click="toggleMenu" class="pi pi-ellipsis-v text-blue-500 " style="font-size: 1.5rem" ></i>
          </div>
          <pv-button v-if="this.user.typeOfUser === 'Arrendador'" @click="$router.push('/mycars')" icon="pi pi-home" class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex" v-tooltip.bottom="'Cars'"/>
          <pv-button v-if="this.user.typeOfUser === 'Arrendador'" @click="$router.push('/add-car')" icon="pi pi-plus" class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex" v-tooltip.bottom="'Add a Car'"/>
          <pv-button v-if="this.user.typeOfUser === 'Arrendatario'" @click="$router.push('/rents')" icon="pi pi-home" class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex" v-tooltip.bottom="'Rents'"/>
          <pv-button v-if="this.user.typeOfUser === 'Arrendatario'" @click="$router.push('/favourite')" icon="pi pi-star" class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex" v-tooltip.bottom="'Favourites'"/>
          <pv-button @click="$router.push('/search-auto')" icon="pi pi-search" class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex" v-tooltip.bottom="'Explore Cars'"/>
          <pv-button @click="$router.push('/login')" icon="pi pi-sign-out" class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex" v-tooltip.bottom="'Log out'"/>
        </div>
      </template>
    </pv-toolbar>
</template>
<script>
import { userStore } from "@/user/login/stores/user-store";
export default {
  name: "navbar.component",
  data() {
    return {
      user: {},
      items: [
        {
          label: 'Profile',
          icon: 'pi pi-user',
          command: () => {
            this.$router.push('/profile');
          }
        },
        {
          label: 'My Cars',
          icon: 'pi pi-car',
          command: () => {
            this.$router.push('/mycars');
          }
        },
        {
          label: 'Add Car',
          icon: 'pi pi-plus',
          command: () => {
            this.$router.push('/add-car');
          }
        },
        {
          label: 'Search',
          icon: 'pi pi-search',
          command: () => {
            this.$router.push('/search-auto');
          }
        },
        {
          label: 'Sign Out',
          icon: 'pi pi-sign-out',
          command: () => {
            this.$router.push('/login');
          }
        }
      ]
    };
  },
  created() {
    this.user = userStore();
  },
  methods: {
    toggleMenu(event) {
      this.$refs.menu.toggle(event);
    }
  }
};
</script>
<style scoped>
.style-logo {
  width: 160px;
}
</style>
