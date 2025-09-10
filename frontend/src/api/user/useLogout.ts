import { api } from "../apiClient";
import { Message } from "@/lib/types/types";

export async function logoutUser() {
    try{
        const res = await api.get<Message>("/refresh/logout")
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Çıkış yapılamadı")
    }
}