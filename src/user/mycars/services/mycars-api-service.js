import http from "../../../core/services/http-common";

export class MycarsApiService{
    getById(id){
        return http.get(`/cars/user/${id}`);
    }
    deleteById(id){
        return http.delete(`cars/${id}`)
    }
}

export default new MycarsApiService();