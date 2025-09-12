import { api } from "../apiClient";
import { UpdateReviewStatusRequest, Message } from "@/lib/types/types";

export async function updateAdminReview(data: UpdateReviewStatusRequest) {
    try{
        const res = await api.put<Message>("/admin/reviews/", data)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Admin yorum güncellenemedi")
    }
}