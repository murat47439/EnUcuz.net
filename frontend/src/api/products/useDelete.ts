import { api } from "../apiClient";
import { Message, UrlData } from "@/lib/types/types";

export async function deleteProduct(data: UrlData) {
    try{
        const res = await api.delete<Message>(`/admin/products/${data.id}`)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Ürün silinemedi")
    }
}