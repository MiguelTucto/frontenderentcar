import http from "../../../core/services/http-common";

class UsersApiService{
  getEmailAndPassword(email, password) {
    return http.get(`/users?email=${email}&password=${password}`);
  }
}

export default new UsersApiService