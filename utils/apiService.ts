import axios from "axios";
import getCurrentUrl from "./getCurrentUrl";

class ApiService {
  public get(...args: Parameters<typeof axios.get>) {
    const [url, ...rest] = args;
    return axios.get(getCurrentUrl(url), ...rest);
  }
  public put(...args: Parameters<typeof axios.put>) {
    const [url, ...rest] = args;
    return axios.put(getCurrentUrl(url), ...rest);
  }
  public post(...args: Parameters<typeof axios.post>) {
    const [url, ...rest] = args;
    return axios.post(getCurrentUrl(url), ...rest);
  }
  public delete(...args: Parameters<typeof axios.delete>) {
    const [url, ...rest] = args;
    return axios.delete(getCurrentUrl(url), ...rest);
  }
}

export default new ApiService();
