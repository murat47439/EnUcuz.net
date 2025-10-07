import { AxiosError } from "axios";
import { api } from "../apiClient";
import { Message, CreateReviewRequest } from "@/lib/types/types";

export async function addReview(data: CreateReviewRequest): Promise<Message> {
    try{
      const res = await api.post("/reviews", data);
      
      // Transform controller response to match expected type structure
      const response: Message = {
          success: true,
          message: res.data.message || "Yorum başarıyla eklendi",
          data: res.data.data
      };
      
      return response;
    }catch(err: unknown){ 
      const error = err as AxiosError<{ message: string }>;
      throw new Error(error?.response?.data?.message ||"Yorum eklenemedi")
    }
}
