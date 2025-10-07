import { AxiosError } from "axios";
import { api } from "../apiClient";
import { RegisterRequest, RegisterResponse } from "@/lib/types/types";

export async function registerUser(data: RegisterRequest): Promise<RegisterResponse> {
    try{
      const res = await api.post("/register", data);
      
      // Transform controller response to match expected type structure
      const response: RegisterResponse = {
          success: true,
          message: res.data.message || "Kullanıcı başarıyla oluşturuldu",
          data: res.data.data
      };
      
      return response;
    }catch(err: unknown){ 
      const error = err as AxiosError<{ message: string }>;
      throw new Error(error?.response?.data?.message ||"Kayıt olunamadı")
    }
}