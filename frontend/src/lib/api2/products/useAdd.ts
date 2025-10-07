import { AxiosError } from "axios";
import { api } from "../apiClient";
import { Message, Product } from "@/lib/types/types";

export async function addProduct(data: Product): Promise<Message> {
    try{
      const res = await api.post("/products/transactions", data);
      
      // Transform controller response to match expected type structure
      const response: Message = {
          success: true,
          message: res.data.message || "Ürün başarıyla eklendi",
          data: res.data.data
      };
      
      return response;
    }catch(err: unknown){ 
      const error = err as AxiosError<{ message: string }>;
      throw new Error(error?.response?.data?.message ||"Ürün eklenemedi")
    }
}
