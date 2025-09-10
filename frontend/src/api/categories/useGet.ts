import { api } from "../apiClient";
import { Category, UrlData } from "@/lib/types/types";


export async function GetCategory(data:UrlData) {
    try{
        const res = await api.get<Category>(`/categories/${data.id}`)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Kategori bulunamadı")
    }
}
