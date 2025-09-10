
import { api } from "../apiClient";
import { UrlData, GetProdResponse } from "@/lib/types/types";

export async function getProduct(data: UrlData) {
    try{
        const res = await api.get<GetProdResponse>(`/products/${data.id}`)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Ürün bulunamadı")
    }
}