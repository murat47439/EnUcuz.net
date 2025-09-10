import { api } from "../apiClient";
import { CompareData, ProductDetail } from "@/lib/types/types";


export async function CompareProd(data:CompareData) {
    try{
        const res = await api.get<ProductDetail[]>(`/products/compare/${data.id}/${data.id2}`)
        return res.data 
    }catch(err : any){
        throw new Error(err?.response?.data?.message || "Ürünler getirilemedi")
    }
}