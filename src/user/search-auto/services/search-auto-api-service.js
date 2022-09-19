import http from "../../../core/services/http-common";

export class SearchAutoApiService{
    getAll(){
        return http.get(`/cars`);
    }
}

export default new SearchAutoApiService();