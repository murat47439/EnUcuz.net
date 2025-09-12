
import { api } from "../apiClient";
import { IdParam, ProductDetailResponse } from "@/lib/types/types";

export async function getProduct(data: IdParam): Promise<ProductDetailResponse> {
    try{
        const res = await api.get<ProductDetailResponse>(`/products/${data.id}`)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Ürün bulunamadı")
    }
}