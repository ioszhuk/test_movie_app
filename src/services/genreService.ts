import {ApiService} from './apiService';

export class GenreService {
  api = new ApiService();

  getAll() {
    return this.api.getResource('/genres');
  }

}
