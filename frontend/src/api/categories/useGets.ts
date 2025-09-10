import { api } from "../apiClient"
import { PageRequest,Categories } from "@/lib/types/types"


export async function GetCategories(data:PageRequest) {
   try{
      const res = await api.get<Categories>(`/categories`,{params:{
         page: data.page,
         search: data.search
      }})
      return res.data
   }catch(err: any){
      throw new Error(err?.response?.data?.message || "Kategori bulunamadı.")
   }
}
