import axios,{AxiosRequestConfig, AxiosError} from "axios";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface AxiosRequestConfigWithRetry extends AxiosRequestConfig {
  _retry?: boolean;
  _retryCount?: number;
}

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  timeout: 30000,
});

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config as AxiosRequestConfigWithRetry;

    if (error.response?.status === 401 && (!originalRequest._retry || (originalRequest._retryCount || 0) < 1)){
      originalRequest._retry = true
      originalRequest._retryCount = (originalRequest._retryCount || 0) + 1;
      try{
        await api.post("/refresh");
        return api(originalRequest);
      }catch(err: unknown){
        window.location.href = "/login";
        const error = err as AxiosError<{ message: string }>;
        
        return Promise.reject(new Error(error?.response?.data?.message || "Oturum süresi doldu. Lütfen giriş yapın."))
      }
    }


    return Promise.reject(error);

  }
);
export default api;
