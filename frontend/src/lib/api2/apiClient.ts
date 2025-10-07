import axios,{AxiosRequestConfig, AxiosError} from "axios";
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export interface AxiosRequestConfigWithRetry extends AxiosRequestConfig {
  _retry?: boolean;
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

    if (error.response?.status === 401 && !originalRequest._retry){
      originalRequest._retry = true

      try{
        await api.post("/refresh");
        return api(originalRequest);
      }catch(err: unknown){
        // Prevent infinite loop by checking if we're already on login page
        if (window.location.pathname !== "/login") {
          window.location.href = "/login";
        }
        const error = err as AxiosError<{ message: string }>;
        
        return Promise.reject(new Error(error?.response?.data?.message || "Oturum süresi doldu. Lütfen giriş yapın."))
      }
    }

    return Promise.reject(error);
  }
);
export default api;
