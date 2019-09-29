import axios from "axios";
import getCurrentUrl from "../getCurrentUrl";

class ApiService {
  public get<T>(...args: Parameters<typeof axios.get>) {
    const [url, ...rest] = args;
    return axios.get<T>(getCurrentUrl(url), ...rest);
  }
  public put<T>(...args: Parameters<typeof axios.put>) {
    const [url, ...rest] = args;
    return axios.put<T>(getCurrentUrl(url), ...rest);
  }
  public post<T>(...args: Parameters<typeof axios.post>) {
    const [url, ...rest] = args;
    return axios.post<T>(getCurrentUrl(url), ...rest);
  }
  public delete<T>(...args: Parameters<typeof axios.delete>): Promise<T> {
    const [url, ...rest] = args;
    return axios.delete(getCurrentUrl(url), ...rest);
  }
}

export default new ApiService();
