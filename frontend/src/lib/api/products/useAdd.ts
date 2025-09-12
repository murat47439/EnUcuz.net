import { AxiosError } from "axios";
import { api } from "../apiClient";
import { Message, ProductDetail } from "@/lib/types/types";

export async function addProduct(data: ProductDetail) {
    try{
      const res = await api.post<Message>("/admin/products", data);
      return res.data
    }catch(err: unknown){ 
      const error = err as AxiosError<{ message: string }>;
      throw new Error(error?.response?.data?.message ||"Ürün eklenemedi")
    }
}
