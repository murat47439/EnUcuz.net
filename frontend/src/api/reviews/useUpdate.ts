import { api } from "../apiClient";
import { Message, UpdateReviewData } from "@/lib/types/types";

export async function updateReview(data: UpdateReviewData) {
    try{
        const res = await api.put<Message>("/reviews", data)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Yorum güncellenemedi")
    }
}
