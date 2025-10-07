import { AxiosError } from "axios";
import { api } from "../apiClient";
import { UserProfileResponse, LoginRequest, LoginResponse } from "@/lib/types/types";

export async function loginUser(data: LoginRequest): Promise<LoginResponse> {
    try{
      const res = await api.post("/login", data);
      
      // Transform controller response to match expected type structure
      const response: LoginResponse = {
          success: true,
          message: res.data.message || "Giriş başarılı",
          data: {
              user: res.data.data.user
          }
      };
      
      return response;
    }catch(err: unknown){ 
      const error = err as AxiosError<{ message: string }>;
      throw new Error(error?.response?.data?.message ||"Giriş yapılamadı")
    }
}