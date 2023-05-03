import axios, {AxiosInstance} from 'axios';

export class ApiService {
  apiInstance: AxiosInstance;

  constructor() {
    this.apiInstance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL
    });
  }

  async getResource(url: string) {
    return await this.apiInstance.get(url);
  }

  async postResource(url: string, data: object) {
    return await this.apiInstance.post(url, data);
  }
}
