import { Attribute, PaginationRequest, AttributeResponse } from "@/lib/types/types";
import { AxiosError } from "axios";
import api from "../apiClient";

export async function getAttributes(data: PaginationRequest): Promise<AttributeResponse> {
    try{
        const res = await api.get(`/attribute`, {params:{
            page: data.page,
            search: data.search
        }})
        
        // Transform controller response to match expected type structure
        const response: AttributeResponse = {
            success: true,
            message: "Özellikler başarıyla getirildi",
            data: {
                attributes: res.data.Attributes || []
            }
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{message: string}>;
        throw new Error(error?.response?.data?.message || "Özellik bulunamadı.")
    }
}