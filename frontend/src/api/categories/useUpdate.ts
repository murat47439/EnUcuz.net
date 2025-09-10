import { api } from "../apiClient"
import { Message,UpdCatDatas } from "@/lib/types/types"

export async function UpdCatData(data:UpdCatDatas) {
   try{
      const res = await api.put<Message>(`/admin/categories/${data.id}`,data)
      return res.data
   }catch(err: any){
      throw new Error(err?.response?.data?.message || "Kategori güncellenemedi")
   }
}
