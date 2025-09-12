import { api } from "../apiClient";
import { UpdateUserRequest, UpdateUserResponse } from "@/lib/types/types";

export async function updateUser(data: UpdateUserRequest) {
    try{
        const res = await api.put<UpdateUserResponse>("/profile/update", data)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Kullanıcı güncellenemedi")
    }
}