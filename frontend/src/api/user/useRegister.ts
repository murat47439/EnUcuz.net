import { api } from "../apiClient";
import { RegisterData, RegisterResponse } from "@/lib/types/types";

export async function registerUser(data: RegisterData) {
    try{
      const res = await api.post<RegisterResponse>("/register", data);
      return res.data
    }catch(err: any){ 
      throw new Error( err.response?.data?.message ||"Kayıt olunamadı")
    }
}