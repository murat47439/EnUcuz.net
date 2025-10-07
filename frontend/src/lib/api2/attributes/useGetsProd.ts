import api from "../apiClient";
import { AxiosError } from "axios";
import { ProductAttribute, IdParam, AttributeResponse } from "@/lib/types/types";

export async function getProdAttributes(data: IdParam): Promise<AttributeResponse> {
    try{
        const res = await api.get(`attribute/p/${data.id}`)
        
        // Transform controller response to match expected type structure
        const response: AttributeResponse = {
            success: true,
            message: "Ürün özellikleri başarıyla getirildi",
            data: {
                attributes: res.data.attributes || []
            }
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{message: string}>
        throw new Error(error?.response?.data?.message || "Ürün özelliği bulunamadı.")
    }
}