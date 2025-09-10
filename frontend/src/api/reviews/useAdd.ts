import { api } from "../apiClient";
import { Message, ReviewData } from "@/lib/types/types";

export async function addReview(data: ReviewData) {
    try{
      const res = await api.post<Message>("/reviews", data);
      return res.data
    }catch(err: any){ 
      throw new Error( err.response?.data?.message ||"Yorum eklenemedi")
    }
}
