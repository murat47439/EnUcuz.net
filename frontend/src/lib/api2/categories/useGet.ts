import { AxiosError } from "axios";
import { api } from "../apiClient";
import { Category, IdParam, CategoryResponse } from "@/lib/types/types";

export async function GetCategory(data: IdParam): Promise<CategoryResponse> {
    try{
        const res = await api.get(`/categories/${data.id}`)
        
        // Transform controller response to match expected type structure
        const response: CategoryResponse = {
            success: true,
            message: "Kategori başarıyla getirildi",
            data: {
                category: res.data.category
            }
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{ message: string }>;
        throw new Error(error?.response?.data?.message || "Kategori bulunamadı")
    }
}
