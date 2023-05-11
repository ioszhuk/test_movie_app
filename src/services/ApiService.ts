import axios, {AxiosInstance, AxiosResponse} from 'axios';
import {constants} from '../constants';

export class ApiService {
  private apiInstance: AxiosInstance;

  constructor() {
    this.apiInstance = axios.create({
      baseURL: constants.app.baseUrl
    });
  }

  public async getResource<T>(url: string): Promise<AxiosResponse<T>> {
    const response = await this.apiInstance.get<T>(url);

    if (response.status !== axios.HttpStatusCode.Ok) {
      throw new Error(`Could not fetch ${url}, received: ${response.status}`);
    }

    return response;
  }
}
