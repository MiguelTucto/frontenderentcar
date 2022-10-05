import http from "../../../core/services/http-common";

export class RentsCarsApiService {
  getRentsByUserId(id) {
    return http.get(`/rents/user/${id}`);
  }
  getInfoCarById(id) {
    return http.get(`/cars/${id}`);
  }
}

export default new RentsCarsApiService();
