import { AxiosError } from "axios";
import { api } from "../apiClient";
import { Message, RefreshTokenResponse } from "@/lib/types/types";

export async function refreshToken(): Promise<RefreshTokenResponse> {
    try{
        const res = await api.get("/refresh")
        
        // Transform controller response to match expected type structure
        const response: RefreshTokenResponse = {
            success: true,
            message: res.data.message || "Token başarıyla yenilendi",
            data: res.data.data
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{ message: string }>;
        throw new Error(error?.response?.data?.message || "Token yenilenemedi")
    }
}