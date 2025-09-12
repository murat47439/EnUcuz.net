import { api } from "../apiClient";
import { RegisterRequest, RegisterResponse } from "@/lib/types/types";

export async function registerUser(data: RegisterRequest) {
    try{
      const res = await api.post<RegisterResponse>("/register", data);
      return res.data
    }catch(err: any){ 
      throw new Error( err.response?.data?.message ||"Kayıt olunamadı")
    }
}