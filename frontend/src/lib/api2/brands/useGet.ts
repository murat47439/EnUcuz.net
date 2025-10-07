
import { AxiosError } from "axios";
import { api } from "../apiClient";
import { IdParam, Brand, BrandResponse } from "@/lib/types/types";

export async function getBrand(data: IdParam): Promise<BrandResponse> {
    try{
        const res = await api.get(`/brands/${data.id}`)
        
        // Transform controller response to match expected type structure
        const response: BrandResponse = {
            success: true,
            message: "Marka başarıyla getirildi",
            data: {
                brand: res.data.brand
            }
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{ message: string }>;
        throw new Error(error?.response?.data?.message || "Marka bulunamadı")
    }
}