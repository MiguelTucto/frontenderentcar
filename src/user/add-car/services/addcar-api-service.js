import http from "../../../core/services/http-common";

export class AddCarApiService {
  create(userId, data) {
    return http.post(`/cars/user/${userId}/`, data);
  }
}

export default new AddCarApiService();
