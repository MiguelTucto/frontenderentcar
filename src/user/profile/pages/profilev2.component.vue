<template>
  <NavbarComponent></NavbarComponent>
  <div class="flex justify-content-center align-items-center text-center mt-5">
    <pv-card>
          <template #title>Profile</template>
          <template #content>
            <pv-avatar
              :image="user.imageUrl"
              class="avatar"
            />
            <div class="flex flex-row align-items-center justify-content-center mt-5">
              <h4 class="mr-2">Name: </h4>
              <label v-if="toggle">{{ user.name }}</label>
              <pv-inplace :closable="true" @close="closeEdit" @open="editField">
                <template #display>
                  <i class="pi pi-pencil" ></i>
                </template>
                <template #content>
                  <pv-input-text v-model="user.name" />
                </template>
              </pv-inplace>
            </div>
            <pv-divider />
            <div class="flex flex-row align-items-center justify-content-center">
              <h4 class="mr-2">Last Name: </h4>
              <label v-if="toggle2">{{ user.lastName }}</label>
              <pv-inplace :closable="true" @close="closeEdit" @open="editField2">
                <template #display>
                  <i class="pi pi-pencil" ></i>
                </template>
                <template #content>
                  <pv-input-text v-model="user.lastName" />
                </template>
              </pv-inplace>
            </div>
            <pv-divider />
            <div class="flex flex-row align-items-center justify-content-center">
              <h4 class="mr-2">Type Of User: </h4>
              <label v-if="toggle3">{{ user.typeOfUser }}</label>
              <pv-inplace :closable="true" @close="closeEdit" @open="editField3">
                <template #display>
                  <i class="pi pi-pencil" ></i>
                </template>
                <template #content>
                  <pv-input-text v-model="user.typeOfUser" />
                </template>
              </pv-inplace>
            </div>
            <pv-divider />
            <div class="flex flex-row align-items-center justify-content-center">
              <h4 class="mr-2">Email: </h4>
              <label v-if="toggle4">{{ user.email }}</label>
              <pv-inplace :closable="true" @close="closeEdit" @open="editField4">
                <template #display>
                  <i class="pi pi-pencil" ></i>
                </template>
                <template #content>
                  <pv-input-text v-model="user.email" />
                </template>
              </pv-inplace>
            </div>
            <pv-divider />
            <div class="flex flex-row align-items-center justify-content-center">
              <h4 class="mr-2">Password: </h4>
              <label v-if="toggle5">{{ user.password }}</label>
              <pv-inplace :closable="true" @close="closeEdit" @open="editField5">
                <template #display>
                  <i class="pi pi-pencil" ></i>
                </template>
                <template #content>
                  <pv-input-text v-model="user.password" />
                </template>
              </pv-inplace>
            </div>
            <pv-divider />
            <div class="flex flex-row align-items-center justify-content-center">
              <h4 class="mr-2">Image URL: </h4>
              <label v-if="toggle6">{{ user.imageUrl }}</label>
              <pv-inplace :closable="true" @close="closeEdit" @open="editField6">
                <template #display>
                  <i class="pi pi-pencil" ></i>
                </template>
                <template #content>
                  <pv-input-text v-model="user.imageUrl" />
                </template>
              </pv-inplace>
            </div>
            <pv-divider />
            <div class="flex flex-row align-items-center justify-content-center">
              <h4 class="mr-2">Email: </h4>
              <label v-if="toggle7">{{ user.phone }}</label>
              <pv-inplace :closable="true" @close="closeEdit" @open="editField7">
                <template #display>
                  <i class="pi pi-pencil" ></i>
                </template>
                <template #content>
                  <pv-input-text v-model="user.phone" />
                </template>
              </pv-inplace>
            </div>
          </template>
    </pv-card>
  </div>
</template>

<script>
import NavbarComponent from "../../../components/navbar.component.vue";
import UsersApiService from "@/user/subscription/services/users-api.service";
import { userStore } from "@/user/login/stores/user-store";

export default {
  name: "profilev2.component",
  components: {
      NavbarComponent
  },
  data() {
    return {
      user: {},
      userEdit: null,
      toggle: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
      toggle6: true,
      toggle7: true
    }
  },
  created() {
    const localUser = userStore();
    UsersApiService.getById(localUser.id)
      .then( response => this.user = response.data)
      .catch( e => console.log(e));

  },
  methods: {
    closeEdit() {
      this.toggle = true;
      this.toggle2 = true;
      this.toggle3 = true;
      this.toggle4 = true;
      this.toggle5 = true;
      this.toggle6 = true;
      this.toggle7 = true;
      UsersApiService.update(this.user.id, this.user)
        .then(() => console.log(this.user))
        .catch(e => console.log(e));
    },
    editField() {
      this.toggle = false;
    },
    editField2() {
      this.toggle2 = false;
    },
    editField3() {
      this.toggle3 = false
    },
    editField4() {
      this.toggle4 = false
    },
    editField5() {
      this.toggle5 = false
    },
    editField6() {
      this.toggle6 = false
    },
    editField7() {
      this.toggle7 = false
    }
  }

};
</script>

<style scoped>
.avatar{
    width: 200px;
    height: 200px;
}
</style>