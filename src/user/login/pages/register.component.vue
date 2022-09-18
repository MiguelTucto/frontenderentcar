<template>
<div>
  <div clasS="card">
    <pv-steps class="mt-8 mb-8" :model="items" :readonly="true" />
  </div>
  <router-view v-slot="{ Component }" :formData="formObject" @next-page="nextPage($event)" @prev-page="prevPage($event)" @complete="complete">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</div>
</template>

<script>
import UsersApiService from "@/user/subscription/services/users-api.service";

export default {
  name: "register.component",
  data() {
    return {
      items: [
        {
          label: "Personal Information",
          to: "/register"
        },
        {
          label: "Email & Password",
          to: "/register/secondstep"
        },
        {
          label: "Term & Conditions",
          to: "/register/laststep"
        }
      ],
      formObject: {},
      errors: []
    }
  },
  methods: {
    nextPage(event) {
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }
      localStorage.setItem("formObject", JSON.stringify(this.formObject));

      this.$router.push(this.items[event.pageIndex + 1].to);
    },
    prevPage(event) {
      this.$router.push(this.items[event.pageIndex - 1].to);
    },
    async complete(event) {
      for (let field in event.formData) {
        this.formObject[field] = event.formData[field];
      }
      this.methodToCreateUser();
    },
    async createUser(user) {
      console.log(user);
      await UsersApiService.create(user)
        .then(async (response) => {
          localStorage.removeItem("formObject");
          await this.$router.push( { path: "/login"});
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methodToCreateUser() {
      const user = {
        name: this.formObject.name,
        lastName: this.formObject.lastName,
        address: this.formObject.address,
        imageUrl: this.formObject.imageUrl,
        phone: this.formObject.phone,
        email: this.formObject.secondStepDetail.email,
        password: this.formObject.secondStepDetail.password
      };
      this.createUser(user);
    }
  }
};
</script>

<style scoped>

</style>