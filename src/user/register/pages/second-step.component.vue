<template>
  <pv-toast />
  <div class="container">
    <div class="card flex justify-content-center align-items-center">
      <pv-card class="  mt-5 surface-card shadow-5 w-fit">
        <template v-slot:title>
          <div class="text-center">Put your Email & Password</div>
        </template>
        <template v-slot:content>
          <form @submit.prevent="handleSubmit(!v$.$invalid)">
            <div>
              <div>
                <label for="email" class="block text-900 font-medium mb-2"
                >Email</label
                >
                <div class="flex flex-row">
                  <pv-input-text
                    id="registerEmail"
                    v-model="email"
                    :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                    aria-describedby="email"
                  />
                  <div>
                    <i v-show="v$.email.$model" class="pi pi-check bg-green-lighten-5 text-green border-circle p-2 ml-5" ></i>
                  </div>
                </div>
                <small v-show="!v$.email.$model && submitted" class="p-error"
                >Email is required.</small
                >
              </div>
              <div>
                <label for="password" class="block text-900 font-medium mb-2"
                >Password</label
                >
                <div class="flex flex-row">
                  <pv-password
                    id="registerPassword"
                    v-model="password"
                    :class="{ 'p-invalid': v$.password.$invalid && submitted }"
                    aria-describedby="password"
                  >
                    <template #header>
                      <h6>Pick a password</h6>
                    </template>
                    <template #footer>
                      <pv-divider />
                      <p class="mt-2">Suggestions</p>
                      <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                        <li>At least one lowercase</li>
                        <li>At least one uppercase</li>
                        <li>At least one numeric</li>
                        <li>Minimum 8 characters</li>
                      </ul>
                    </template>
                  </pv-password>
                  <div>
                    <i v-show="v$.password.$model" class="pi pi-check bg-green-lighten-5 text-green border-circle p-2 ml-5" ></i>
                  </div>
                </div>
                <small v-show="!v$.password.$model && submitted" class="p-error"
                >Password is required.</small
                >
              </div>
            </div>
            <div class="flex justify-space-between mt-5">
              <pv-button
                icon="pi pi-arrow-left"
                label="Back"
                class="p-button-link"
                @click="prevPage"
              />
              <pv-button
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
  components: { },
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

<style scoped>
.iconfield{
    border-radius: 20px;
    border-color: green;
    color: green;
}

</style>
