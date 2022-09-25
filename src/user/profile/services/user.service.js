import http from "../../../core/services/http-common";
const basePath = "https://erentcar.herokuapp.com/api/v1/clients";
class UserService{

  storageUser = -1;
  getCurrentUser(){
    return JSON.parse(localStorage.getItem('clientId')).id;
  }
  async getUserById(id) {
    return await http.get(`${basePath}/${id}`)
  }
  async updateUserById(id,data){
    return await http.put(`${basePath}/${id}`,data);
  }
}
export default new UserService();
