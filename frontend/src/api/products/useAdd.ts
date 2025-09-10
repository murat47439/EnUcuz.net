import { api } from "../apiClient";
import { Message, ProductDetail } from "@/lib/types/types";

export async function addProduct(data: ProductDetail) {
    try{
      const res = await api.post<Message>("/admin/products", data);
      return res.data
    }catch(err: any){ 
      throw new Error( err.response?.data?.message ||"Ürün eklenemedi")
    }
}
