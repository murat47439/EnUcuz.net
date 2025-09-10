import { api } from "../apiClient";
import { AdminRevData, Message } from "@/lib/types/types";

export async function updateAdminReview(data: AdminRevData) {
    try{
        const res = await api.put<Message>("/admin/reviews/", data)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Admin yorum güncellenemedi")
    }
}