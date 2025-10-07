import { AxiosError } from "axios";
import { api } from "../apiClient";
import { UpdateProductRequest, UpdateProductResponse } from "@/lib/types/types";

export async function updateProduct(data: UpdateProductRequest): Promise<UpdateProductResponse> {
    try{
        const res = await api.put(`/products/transactions/${data.id}`, data)
        
        // Transform controller response to match expected type structure
        const response: UpdateProductResponse = {
            success: true,
            message: res.data.message || "Ürün başarıyla güncellendi",
            data: {
                product: res.data.Product
            }
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{ message: string }>;
        throw new Error(error?.response?.data?.message || "Ürün güncellenemedi")
    }
}
