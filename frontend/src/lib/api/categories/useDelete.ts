import { api} from "../apiClient";
import { Message, IdParam } from "@/lib/types/types";

export async function DeleteCategory(data: IdParam){
    try{
        const res = await api.delete<Message>(`/admin/categories/${data.id}`)
        return res.data
    }catch(err : any){
        throw new Error(err?.response?.data?.message || "Kategori silinemedi")
    }
}
