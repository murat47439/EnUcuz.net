import axios,{AxiosRequestConfig, AxiosError} from "axios";
import { logoutUser } from "./user/useLogout";
import { refreshToken } from "./user/useAccess";
import { useToast } from "@/context/toastContext";
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
  async (error) => {
    const originalRequest = error.config as AxiosRequestConfigWithRetry;

    originalRequest._retryCount = originalRequest._retryCount || 0;

    if (error.response?.status === 401 && originalRequest._retryCount < 1) {
      originalRequest._retryCount += 1;

      try {
        await new Promise(res => setTimeout(res, 1000)); // 1 saniye bekle
        const response = await refreshToken();          // token yenile
        if (!response.success) {
          logoutUser();
          window.location.href = "/login";
          return Promise.reject(new Error("Token yenilenemedi"));
        }
        return api(originalRequest); // başarılıysa isteği tekrar gönder
      } catch (err: unknown) {
        logoutUser();
        window.location.href = "/login";
        const axiosErr = err as AxiosError<{ message: string }>;
        return Promise.reject(
          new Error(axiosErr?.response?.data?.message || "Oturum süresi doldu. Lütfen giriş yapın.")
        );
      }
    }

    return Promise.reject(error);
  }
);


export default api;
