import { api } from "../apiClient";
import { CompareProductsRequest, ProductDetail } from "@/lib/types/types";


export async function CompareProd(data:CompareProductsRequest) {
    try{
        const res = await api.get<ProductDetail[]>(`/products/compare/${data.id}/${data.id2}`)
        return res.data 
    }catch(err : any){
        throw new Error(err?.response?.data?.message || "Ürünler getirilemedi")
    }
}