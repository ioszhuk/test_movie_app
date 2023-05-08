import {ApiService} from './ApiService';
import {IMovie} from '../models/IMovie';
import {IMovieSearch} from '../models/IMovieSearch';

export class MovieService {
  private apiService;

  constructor() {
    this.apiService = new ApiService();
  }

  async getAll() {
    const response = await this.apiService.getResource<IMovie[]>('/movies');
    return response.data;
  }

  async getOne(slug: string) {
    const response = await this.apiService.getResource<IMovie>(`/movies/${slug}`);
    return response.data;
  }

  async search(movieName: string) {
    const data: IMovieSearch = {name: movieName};
    const response = await this.apiService.postResource<IMovie[]>('movies/search', data);
    return response.data;
  }
}
