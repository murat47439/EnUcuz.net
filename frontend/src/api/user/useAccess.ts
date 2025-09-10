import { api } from "../apiClient";
import { Message } from "@/lib/types/types";

export async function refreshToken() {
    try{
        const res = await api.get<Message>("/refresh")
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Token yenilenemedi")
    }
}