import { AxiosError } from "axios";
import { api } from "../apiClient"
import { PaginationRequest, Brands } from "@/lib/types/types"

export async function getBrands(data: PaginationRequest): Promise<Brands> {
   try{
      const res = await api.get(`/brands`,{params:{
         page: data.page,
         search: data.search
      }})
      
      // Transform controller response to match expected type structure
      const response: Brands = {
         success: true,
         message: "Markalar başarıyla getirildi",
         data: {
            brands: res.data.brands || [],
            pagination: {
               page: data.page || 1,
               search: data.search
            }
         }
      };
      
      return res.data;
   }catch(err: unknown){
      const error = err as AxiosError<{ message: string }>;
      throw new Error(error?.response?.data?.message || "Marka bulunamadı.")
   }
}
