import http from "../../../core/services/http-common";
class UserService{
  updateUserById(userId, data){
    return http.put(`/users/${userId}`, data);
  }


}
export default new UserService();
