import axios, {AxiosInstance, AxiosResponse} from 'axios';

export class ApiService {
  private apiInstance: AxiosInstance;

  private static CORRECT_SERVER_STATUS = 'OK';

  constructor() {
    this.apiInstance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL
    });
  }

  async getResource<T>(url: string): Promise<AxiosResponse<T>> {
    const response = await this.apiInstance.get<T>(url);
    return response;
  }

  async postResource<T>(url: string, data: object): Promise<AxiosResponse<T>> {
    const response = await this.apiInstance.post<T>(url, data);
    return response;
  }
}
