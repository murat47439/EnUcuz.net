import { AxiosError } from "axios";
import { api } from "../apiClient";
import { UpdateUserRequest, UpdateUserResponse } from "@/lib/types/types";

export async function updateUser(data: UpdateUserRequest): Promise<UpdateUserResponse> {
    try{
        const res = await api.put("/profile/update", data)
        
        // Transform controller response to match expected type structure
        const response: UpdateUserResponse = {
            success: true,
            message: "Kullanıcı başarıyla güncellendi",
            data: {
                user: res.data.user
            }
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{ message: string }>;
        throw new Error(error?.response?.data?.message || "Kullanıcı güncellenemedi")
    }
}