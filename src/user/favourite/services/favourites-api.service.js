import http from "@/core/services/http-common";

export class FavouritesApiService{
  getAllFarouties(id) {
    return http.get(`/favourites/user/${id}`);
  }
}

export default new FavouritesApiService();