import http from "../../../core/services/http-common";

export class SearchAutoApiService{
    getAll(){
        return http.get(`/cars`);
    }
    addFavourite(userId, carId){
        return http.post(`/favourites/user/${userId}/car/${carId}`);
    }
}

export default new SearchAutoApiService();