import { api } from "../apiClient"
import { PaginationRequest, CategoriesListResponse } from "@/lib/types/types"


export async function GetCategories(data: PaginationRequest) {
   try{
      const res = await api.get<CategoriesListResponse>(`/categories`,{params:{
         page: data.page,
         search: data.search
      }})
      return res.data
   }catch(err: any){
      throw new Error(err?.response?.data?.message || "Kategori bulunamadı.")
   }
}
