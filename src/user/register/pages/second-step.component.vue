<template>
  <pv-toast />
  <div class="container">
    <div class="flex flex-column align-items-center">
      <pv-card class="mt-5 surface-card shadow-5">
        <template v-slot:title>
          <div class="text-center">Put your Email & Password</div>
        </template>
        <template v-slot:content>
          <form @submit.prevent="handleSubmit(!v$.$invalid)">
            <div>
              <label for="email" class="block text-900 font-medium mb-2"
                >Email</label
              >
              <pv-input-text
                id="registerEmail"
                v-model="email"
                :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                class="w-full"
                aria-describedby="email"
              />
              <small v-show="!v$.email.$model && submitted" class="p-error"
                >Email is required.</small
              >
              <label for="password" class="block text-900 font-medium mb-2"
                >Password</label
              >
              <pv-input-text
                id="registerPassword"
                v-model="password"
                :class="{ 'p-invalid': v$.password.$invalid && submitted }"
                class="w-full"
                aria-describedby="password"
              />
              <small v-show="!v$.password.$model && submitted" class="p-error"
                >Password is required.</small
              >
            </div>
            <div class="flex justify-space-between mt-5">
              <pv-button
                icon="pi pi-arrow-left"
                label="Back"
                class="p-button-link"
                @click="prevPage"
              />
              <pv-button
                icon="pi pi-arrow-right"
                iconPos="right"
                label="Continue"
                class="p-button-rounded"
                type="submit"
              />
            </div>
          </form>
        </template>
      </pv-card>
    </div>
  </div>
</template>

<script>
import { required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

export default {
  name: "second-step.component",
  setup: () => ({ v$: useVuelidate() }),
  data: () => {
    return {
      email: "",
      password: "",
      submitted: false,
      formObject: {},
    };
  },
  validations() {
    return {
      email: {
        required,
      },
      password: {
        required,
      },
    };
  },
  methods: {
    nextPage() {
      const secondStepDetail = {
        email: this.email,
        password: this.password,
      };

      this.$emit("next-page", {
        formData: {
          secondStepDetail: secondStepDetail,
        },
        pageIndex: 1,
      });
    },
    handleSubmit(isFormValid) {
      this.submitted = true;
      if (isFormValid) {
        this.nextPage();
      } else {
        this.$toast.add({
          severity: "error",
          summary: "Error Message",
          detail: "Verify fields to continue.",
          life: 3000,
        });
      }
    },
    prevPage() {
      this.$emit("prev-page", { pageIndex: 1 });
    },
  },
};
</script>

<style scoped></style>
