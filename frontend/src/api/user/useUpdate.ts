import { api } from "../apiClient";
import { UpdateData, UpdateResponse } from "@/lib/types/types";

export async function updateUser(data: UpdateData) {
    try{
        const res = await api.put<UpdateResponse>("/profile/update", data)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Kullanıcı güncellenemedi")
    }
}