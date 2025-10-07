import { AxiosError } from "axios";
import { api } from "../apiClient";
import { Message, LogoutResponse } from "@/lib/types/types";

export async function logoutUser(): Promise<LogoutResponse> {
    try{
        const res = await api.get("/refresh/logout")
        
        // Transform controller response to match expected type structure
        const response: LogoutResponse = {
            success: true,
            message: res.data.message || "Çıkış başarılı",
            data: res.data.data
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{ message: string }>;
        throw new Error(error?.response?.data?.message || "Çıkış yapılamadı")
    }
}