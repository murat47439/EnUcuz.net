
import { AxiosError } from "axios";
import { api } from "../apiClient";
import { IdParam, ProductDetail, ProductDetailResponse } from "@/lib/types/types";

export async function getProduct(data: IdParam): Promise<ProductDetailResponse> {
    try{
        const res = await api.get(`/products/${data.id}`)
        
        // Transform controller response to match expected type structure
        const response: ProductDetailResponse = {
            success: true,
            message: "Ürün başarıyla getirildi",
            data: {
                product: {
                    Product: res.data.Product,
                    Attribute: res.data.Attribute || []
                }
            }
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{ message: string }>;
        throw new Error(error?.response?.data?.message || "Ürün bulunamadı")
    }
}