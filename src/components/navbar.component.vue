<template>
  <pv-toast />
  <pv-confirm-dialog></pv-confirm-dialog>
  <pv-toolbar class="border-none bg-blue-200">
    <template #start>
      <v-img
        src="https://i.postimg.cc/mrsLXChs/e-Rent-Car-removebg-preview.png"
        class="style-logo"
      ></v-img>
    </template>
    <template #end>
      <div class="flex flex-row gap-3" id="sidebar" v-if="toggle">
        <pv-button
          @click="$router.push('/userprofile')"
          icon="pi pi-user"
          class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex"
          v-tooltip.bottom="'Profile'"
        />
        <div class="sm:hidden appearance-none">
          <pv-menu ref="menu" :model="items" :popup="true" />
          <pv-chip :label= "user.name" :image="user.imageUrl"  @click="toggleMenu"/>
        </div>
        <pv-button
          v-if="this.user.typeOfUser === 'Arrendador'"
          @click="$router.push('/mycars')"
          icon="pi pi-home"
          class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex"
          v-tooltip.bottom="'Cars'"
        />
        <pv-button
          v-if="this.user.typeOfUser === 'Arrendador'"
          @click="$router.push('/add')"
          icon="pi pi-plus"
          class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex"
          v-tooltip.bottom="'Add a Car'"
        />
        <pv-button
          v-if="this.user.typeOfUser === 'Arrendatario'"
          @click="$router.push('/rents')"
          icon="pi pi-home"
          class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex"
          v-tooltip.bottom="'Rents'"
        />
        <pv-button
          v-if="this.user.typeOfUser === 'Arrendatario'"
          @click="$router.push('/favourite')"
          icon="pi pi-star"
          class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex"
          v-tooltip.bottom="'Favourites'"
        />
        <pv-button
          @click="$router.push('/search-auto')"
          icon="pi pi-search"
          class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex"
          v-tooltip.bottom="'Explore Cars'"
        />
        <pv-button
          @click="confirm1"
          icon="pi pi-sign-out"
          class="p-button-rounded p-button-lg p-button-text hover:bg-blue-500 hover:text-white transition-duration-1000 hidden sm:inline-flex"
          v-tooltip.bottom="'Log out'"
        />
      </div>
    </template>
  </pv-toolbar>
</template>
<script>
import { userStore } from "@/user/login/stores/user-store";

export default {
  name: "navbar.component",
  components: {  },
  data() {
    return {
      user: {},
      toggle: true,
      items: [
        {
          label: "Profile",
          icon: "pi pi-user",
          command: () => {
            this.$router.push("/userprofile");
          },
        },
        { separator: true },
        {
          label: "My Cars",
          icon: "pi pi-car",
          command: () => {
            this.$router.push("/mycars");
          },
        },
        { separator: true },
        {
          label: "Add Car",
          icon: "pi pi-plus",
          command: () => {
            this.$router.push("/add");
          },
        },
        { separator: true },
        {
          label: "Search",
          icon: "pi pi-search",
          command: () => {
            this.$router.push("/search-auto");
          },
        },
        { separator: true },
        {
          label: "Sign Out",
          icon: "pi pi-sign-out",
          command: () => {
            this.$confirm.require({
              message: '¿Are you sure you want to exit?',
              header: 'Confirmation',
              icon: 'pi pi-exclamation-circle',
              acceptClass: 'p-button-danger',
              accept: () => {
                this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: '!Comeback soon!', life: 3000 });
                this.logOut();
                this.$router.push("/login");
              },
              reject: () => {

              }
            });
          },
        },
      ],
    };
  },
  created() {
    this.user = userStore();
  },
  methods: {
    toggleMenu(event) {
      this.$refs.menu.toggle(event);
    },
    logOut() {
      this.toggle = false;
      this.user.logout();
      console.log(this.user.name);
      console.log("!it works");
    },
    confirm1() {
      this.$confirm.require({
        message: '¿Are you sure you want to exit?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-circle',
        acceptClass: 'p-button-danger',
        accept: () => {
          this.$toast.add({ severity: 'info', summary: 'Confirmed', detail: '!Comeback soon!', life: 3000 });
          this.logOut();
          this.$router.push("/login");
        },
        reject: () => {

        }
      });
    }
  },
};
</script>
<style scoped>
.style-logo {
  width: 160px;
}
.list-element {
  list-style: none;
  margin-top: 8px;
  font-weight: bold;
}
</style>
