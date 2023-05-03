import {ApiService} from './apiService';

export class MovieService {
  api = new ApiService();

  getAll() {
    return this.api.getResource('/movies');
  }

  getOne(slug: string) {
    return this.api.getResource(`/movies/${slug}`);
  }
}
