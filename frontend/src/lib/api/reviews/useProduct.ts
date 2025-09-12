import { AxiosError } from "axios";
import { api } from "../apiClient";
import { IdParam, ReviewsListResponse } from "@/lib/types/types";

export async function getProductReviews(data: IdParam) {
    try{
        const res = await api.get<ReviewsListResponse>(`/products/${data.id}/reviews`)
        return res.data
    }catch(err: unknown){
        const error = err as AxiosError<{ message: string }>;
        throw new Error(error?.response?.data?.message || "Ürün yorumları bulunamadı")
    }
}