import { api } from "../apiClient";
import { Message, LoginData } from "@/lib/types/types";

export async function loginUser(data: LoginData) {
    try{
      const res = await api.post<Message>("/login", data);
      return res.data
    }catch(err: any){ 
      throw new Error( err.response?.data?.message ||"Giriş yapılamadı")
    }
}