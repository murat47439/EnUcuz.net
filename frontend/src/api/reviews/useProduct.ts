import { api } from "../apiClient";
import { UrlData, ResponseData } from "@/lib/types/types";

export async function getProductReviews(data: UrlData) {
    try{
        const res = await api.get<ResponseData>(`/products/${data.id}/reviews`)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Ürün yorumları bulunamadı")
    }
}