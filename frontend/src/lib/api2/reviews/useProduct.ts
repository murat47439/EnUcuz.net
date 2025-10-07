import { api } from "../apiClient";
import { IdParam, ReviewsListResponse } from "@/lib/types/types";
import { AxiosError } from "axios";

export async function getProductReviews(data: IdParam): Promise<ReviewsListResponse> {
    try{
        const res = await api.get(`/products/${data.id}/reviews`)
        
        // Transform controller response to match expected type structure
        const response: ReviewsListResponse = {
            success: true,
            message: "Ürün yorumları başarıyla getirildi",
            data: {
                reviews: res.data.reviews || [],
                pagination: {
                    page: 1,
                    product_id: data.id
                }
            }
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{ message: string }>;
        throw new Error(error?.response?.data?.message || "Ürün yorumları bulunamadı")
    }
}