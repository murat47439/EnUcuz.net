import api from "../apiClient";
import { AxiosError } from "axios";
import { CategoryAttributeRes, IdParam } from "@/lib/types/types";

export async function getCategoryAttributes(data: IdParam): Promise<CategoryAttributeRes> {
    try{
        const res = await api.get(`attribute/c/${data.id}`)
        
        // Transform controller response to match expected type structure
        const response: CategoryAttributeRes = {
            success: true,
            message: "Kategori özellikleri başarıyla getirildi",
            data: {
                category_attributes: res.data.category_attributes || []
            }
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{message: string}>  
        throw new Error(error?.response?.data?.message || "Kategori özellikleri bulunamadı.")
    }
}