import { api } from "../apiClient";
import { ReviewsListResponse } from "@/lib/types/types";

export async function getUserReviews() {
    try{
        const res = await api.get<ReviewsListResponse>("/profile/reviews")
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Kullanıcı yorumları bulunamadı")
    }
} 