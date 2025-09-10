import { api } from "../apiClient";
import { PageRequest, ProductResponse } from "@/lib/types/types";

export async function getProducts(data: PageRequest) {
    try{
        const params = new URLSearchParams();
        if (data.page) params.append('page', String(data.page));
        if (data.search) params.append('search', data.search);
        
        const res = await api.get<ProductResponse>(`/products?${params}`)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Ürünler bulunamadı")
    }
}
