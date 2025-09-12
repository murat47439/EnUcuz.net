import { api } from "../apiClient";
import { Message, LoginRequest } from "@/lib/types/types";

export async function loginUser(data: LoginRequest) {
    try{
      const res = await api.post<Message>("/login", data);
      return res.data
    }catch(err: any){ 
      throw new Error( err.response?.data?.message ||"Giriş yapılamadı")
    }
}