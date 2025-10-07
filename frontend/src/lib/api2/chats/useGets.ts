import { AxiosError } from "axios";
import { api } from "../apiClient"
import { PaginationRequest, Chats } from "@/lib/types/types"

export async function getChats(data: PaginationRequest): Promise<Chats> {
   try{
      const res = await api.get(`/chats`,{params:{
         page: data.page
      }})
      
      // Transform controller response to match expected type structure
      const response: Chats = {
         success: true,
         message: "Sohbetler başarıyla getirildi",
         data: {
            chats: res.data.chats || [],
            pagination: {
               page: data.page || 1
            }
         }
      };
      
      return response;
   }catch(err: unknown){
      const error = err as AxiosError<{ message: string }>;
      throw new Error(error?.response?.data?.message || "Sohbetler bulunamadı.")
   }
}
