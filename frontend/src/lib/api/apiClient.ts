import axios,{AxiosRequestConfig} from "axios";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
console.log("✅ BUILD API URL:", API_BASE_URL); // build sırasında gözükmeli

export interface AxiosRequestConfigWithRetry extends AxiosRequestConfig {
  _retry?: boolean;
}

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  timeout: 10000,
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config as AxiosRequestConfigWithRetry;

    if (error.response?.status === 401 && !originalRequest._retry){
      originalRequest._retry = true

      try{
        await api.post("/refresh");
        return api(originalRequest);
      }catch(err){
        window.location.href = "/login";
        return Promise.reject(new Error("Oturum süresi doldu. Lütfen giriş yapın."))
      }
    }


    return Promise.reject(error);

  }
);
export default api;
