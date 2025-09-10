import { api } from "../apiClient";
import { UpdateData, UpdateResponse } from "@/lib/types/types";

export async function updateProduct(data: UpdateData) {
    try{
        const res = await api.put<UpdateResponse>(`/admin/products/${data.id}`, data)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Ürün güncellenemedi")
    }
}
