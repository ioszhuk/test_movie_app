import {ApiService} from './ApiService';
import {IMovie} from '../types/IMovie';

export class MovieService {
  private static API: ApiService = new ApiService();

  public static async getAll(): Promise<IMovie[]> {
    const response = await MovieService.API.getResource<IMovie[]>('/movies');
    return response.data;
  }

  public static async getOne(slug: string): Promise<IMovie> {
    const response = await MovieService.API.getResource<IMovie>(`/movies/${slug}`);
    return response.data;
  }

  public static async searchByName(name: string): Promise<IMovie[]> {
    const url = `/movies/search/?name=${name}`;
    const response = await MovieService.API.getResource<IMovie[]>(url);
    return response.data;
  }
}
