import { defineStore } from "pinia";

export const userStore = defineStore( {
  id: 'user',
  state: () => ({
    id: '',
    name: '',
    lastName: '',
    address: '',
    imageUrl: '',
    phone: '',
    email: '',
    password: ''
  }),
  actions: {
    setUser(user) {
      this.id = user.id;
      this.name = user.name;
      this.lastName = user.lastName;
      this.address = user.address;
      this.imageUrl = user.imageUrl;
      this.phone = user.phone;
      this.email = user.email;
      this.password = user.password;
    },
    logout() {
      this.name = '',
      this.lastName = '',
      this.address = '',
      this.imageUrl = '',
      this.phone = '',
      this.email = '',
      this.password = ''
    }
  },
  getters: {},
  persist: true
})