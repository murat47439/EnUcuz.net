import { api } from "../apiClient";
import { Category, IdParam } from "@/lib/types/types";


export async function GetCategory(data: IdParam) {
    try{
        const res = await api.get<Category>(`/categories/${data.id}`)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Kategori bulunamadı")
    }
}
