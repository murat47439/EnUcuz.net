
import { api } from "../apiClient";
import { FavoritesListResponse } from "@/lib/types/types";

export async function getFavourites() {
    try{
        const res = await api.get<FavoritesListResponse>("/favourites")
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Favoriler bulunamadı")
    }
}