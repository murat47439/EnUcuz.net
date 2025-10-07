import { AxiosError } from "axios";
import { api } from "../apiClient";
import { Message, Brand, BrandResponse } from "@/lib/types/types";

export async function addBrands(data: Brand): Promise<BrandResponse> {
    try{
      const res = await api.post("/admin/brands", data);
      
      // Transform controller response to match expected type structure
      const response: BrandResponse = {
          success: true,
          message: "Marka başarıyla eklendi",
          data: {
              brand: res.data.brand
          }
      };
      
      return response;
    }catch(err: unknown){ 
      const error = err as AxiosError<{ message: string }>;
      throw new Error(error?.response?.data?.message ||"Marka eklenemedi")
    }
}
