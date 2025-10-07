import { AxiosError } from "axios";
import { api } from "../apiClient";
import { UserProfileResponse } from "@/lib/types/types";

export async function getUserProfile(): Promise<UserProfileResponse> {
    try{
        const res = await api.get("/profile")
        
        // Transform controller response to match expected type structure
        const response: UserProfileResponse = {
            success: true,
            message: "Profil başarıyla getirildi",
            data: {
                user: res.data.user
            }
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{ message: string }>;
        throw new Error(error?.response?.data?.message || "Profil bulunamadı")
    }
}