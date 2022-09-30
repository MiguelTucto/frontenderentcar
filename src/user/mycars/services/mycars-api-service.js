import http from "../../../core/services/http-common";

export class MycarsApiService{
    getById(id){
        return http.get(`/cars/user/${id}`);
    }
    deleteById(id){
        return http.delete(`cars/${id}`)
    }
    updateById(carId, data){
        return http.put(`cars/${carId}`, data)
    }
    deleteRentCarById(idRent){
        return http.delete(`rents/${idRent}`);
    }
}

export default new MycarsApiService();