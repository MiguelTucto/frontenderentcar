<template>
<div>
  <div clasS="card">
    <pv-steps class="mt-5 mb-8" :model="items" :readonly="true" />
  </div>
  <router-view v-slot="{ Component }" :formData="formObject" @next-page="nextPage($event)" @prev-page="prevPage($event)">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</div>
</template>

<script>
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
      formObject: {}
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
    complete() {
      this.$toast.add({severity:'success', summary:'Order submitted', detail: 'Dear, ' + this.formObject.firstname + ' ' + this.formObject.lastname + ' your order completed.'});
    }
  }
};
</script>

<style scoped>

</style>