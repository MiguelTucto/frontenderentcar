import http from "../../../core/services/http-common";

export class FavouritesApiService{
    getAll() {
        return http.get('/favourites');
    }
}

export default new FavouritesApiService();