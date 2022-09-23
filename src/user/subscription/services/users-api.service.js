import http from "../../../core/services/http-common";

class UsersApiService{
  getEmailAndPassword(email, password) {
    return http.post(`/users/login`, {
      email: email,
      password: password
    });
  }
  create(data){
    return http.post(`/users`, data);
  }
  update(id, data){
    return http.put(`/users/${id}`, data);
  }
}

export default new UsersApiService