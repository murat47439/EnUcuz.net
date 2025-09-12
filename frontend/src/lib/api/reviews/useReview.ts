import { api } from "../apiClient";
import { IdParam, ReviewDetailResponse } from "@/lib/types/types";

export async function getReview(data: IdParam) {
    try{
        const res = await api.get<ReviewDetailResponse>(`/reviews/${data.id}`)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Yorum bulunamadı")
    }
}
