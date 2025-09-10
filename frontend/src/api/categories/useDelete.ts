import { api} from "../apiClient";
import { Message, UrlData } from "@/lib/types/types";

export async function DeleteCategory(data: UrlData){
    try{
        const res = await api.delete<Message>(`/admin/categories/${data.id}`)
        return res.data
    }catch(err : any){
        throw new Error(err?.response?.data?.message || "Kategori silinemedi")
    }
}
