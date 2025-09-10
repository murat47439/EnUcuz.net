import { api } from "../apiClient";
import { Message, AddFavorites } from "@/lib/types/types";

export async function addFavorite(data: AddFavorites) {
    try{
      const res = await api.post<Message>("/favourites", data);
      return res.data
    }catch(err: any){ 
      throw new Error( err.response?.data?.message ||"Favori eklenemedi")
    }
}
