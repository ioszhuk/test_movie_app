import {ApiService} from './ApiService';
import {IGenre} from '../types/IGenre';

export class GenreService {
  private static API: ApiService = new ApiService();

  public static async getAll(): Promise<IGenre[]> {
    const response = await GenreService.API.getResource<IGenre[]>('/genres');
    return response.data;
  }
}
