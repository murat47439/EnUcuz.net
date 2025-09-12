import { api } from "../apiClient";
import { UpdateProductRequest, UpdateProductResponse } from "@/lib/types/types";

export async function updateProduct(data: UpdateProductRequest) {
    try{
        const res = await api.put<UpdateProductResponse>(`/admin/products/${data.id}`, data)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Ürün güncellenemedi")
    }
}
