import { AxiosError } from "axios";
import { api } from "../apiClient"
import { PaginationRequest, CategoriesListResponse } from "@/lib/types/types"

export async function GetCategories(data: PaginationRequest): Promise<CategoriesListResponse> {
   try{
      const res = await api.get(`/categories`,{params:{
         page: data.page,
         search: data.search
      }})
      
      // Transform controller response to match expected type structure
      const response: CategoriesListResponse = {
         success: true,
         message: "Kategoriler başarıyla getirildi",
         data: {
            categories: res.data.categories || [],
            pagination: {
               page: data.page || 1,
               search: data.search
            }
         }
      };
      
      return response;
   }catch(err: unknown){
      const error = err as AxiosError<{ message: string }>;
      throw new Error(error?.response?.data?.message || "Kategori bulunamadı.")
   }
}
