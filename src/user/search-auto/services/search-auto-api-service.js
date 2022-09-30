import http from "../../../core/services/http-common";

export class SearchAutoApiService{
    getAll(){
        return http.get(`/cars`);
    }
    addFavourite(userId, carId){
        return http.post(`/favourites/user/${userId}/car/${carId}`, {
            userId,
            carId
        });
    }
    addRentCar(userId, carId){
        return http.post(`/rents/user/${userId}/car/${carId}`, {
            userId,
            carId,
            "startDate": "string",
            "finishDate": "string",
            "amount": 0,
            "rate": 0
        });
    }
}

export default new SearchAutoApiService();