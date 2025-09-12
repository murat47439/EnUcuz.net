import { api } from "../apiClient";
import { Message, IdParam } from "@/lib/types/types";

export async function deleteReview(data: IdParam) {
    try{
        const res = await api.delete<Message>(`/reviews/${data.id}`)
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Yorum silinemedi")
    }
}