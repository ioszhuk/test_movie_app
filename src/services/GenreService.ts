import {ApiService} from './ApiService';
import {IGenre} from '../models/IGenre';

export class GenreService {
  private apiService;

  constructor() {
    this.apiService = new ApiService();
  }

  async getAll() {
    const response = await this.apiService.getResource<IGenre[]>('/genres');
    return response.data;
  }
}
