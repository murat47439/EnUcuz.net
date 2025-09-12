import { api } from "../apiClient";
import { UserProfileResponse } from "@/lib/types/types";

export async function getUserProfile() {
    try{
        const res = await api.get<UserProfileResponse>("/profile")
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Profil bulunamadı")
    }
}