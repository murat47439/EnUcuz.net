import api from "../apiClient";
import { AxiosError } from "axios";
import { Attribute, AddAttributeRes } from "@/lib/types/types";

export async function addAttribute(data: Attribute): Promise<AddAttributeRes> {
    try{
        const res = await api.post(`/attribute`, data);
        
        // Transform controller response to match expected type structure
        const response: AddAttributeRes = {
            success: true,
            message: "Özellik başarıyla eklendi",
            data: {
                attribute: res.data.attribute
            }
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{message: string}>
        throw new Error(error?.response?.data?.message || "Özellik eklenemedi.")
    }
}