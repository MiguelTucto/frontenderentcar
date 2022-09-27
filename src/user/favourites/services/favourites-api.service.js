import http from "../../../core/services/http-common";

export class FavouritesApiService{
    getAll() {
        return http.get('/favourites');
    }
    getAllByUser(id){
        return http.get(`/favourites/user/${id}`);
    }
    getInfoCarById(id){
        return http.get(`/cars/${id}`);
    }
    deleteById(id){
        return http.delete(`/favourites/${id}`);
    }
}

export default new FavouritesApiService();