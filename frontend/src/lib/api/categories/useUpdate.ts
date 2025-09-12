import { api } from "../apiClient"
import { Message, UpdateCategoryRequest } from "@/lib/types/types"

export async function UpdCatData(data: UpdateCategoryRequest) {
   try{
      const res = await api.put<Message>(`/admin/categories/${data.id}`,data)
      return res.data
   }catch(err: any){
      throw new Error(err?.response?.data?.message || "Kategori güncellenemedi")
   }
}
