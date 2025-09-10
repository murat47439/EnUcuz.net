import { api } from "../apiClient";
import { UrlData, GetReviewResult } from "@/lib/types/types";

export async function getReview(data: UrlData) {
    try{
        const res = await api.get<GetReviewResult>(`/reviews/${data.id}`)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Yorum bulunamadı")
    }
}
