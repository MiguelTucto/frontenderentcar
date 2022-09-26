<template>
  <NavbarComponent/>
  <div>{{ users.name }}</div>

</template>

<script>
import NavbarComponent from "../../../components/navbar.component.vue";
import UsersApiService from "@/user/subscription/services/users-api.service";
import { userStore } from "@/user/login/stores/user-store";

export default {
  name: "profile.component",
  components: {
    NavbarComponent
  },
  data(){
    return {
      users: {},
      usersService: UsersApiService
    }
  },
  created() {
    const us = userStore();
    this.usersService.getById(us.id).then((response) => {
      this.users = response.data;
      console.log(response);
    })
  }
};
</script>

<style scoped>

</style>