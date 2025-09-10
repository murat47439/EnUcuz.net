
import { api } from "../apiClient";
import { Favorites } from "@/lib/types/types";

export async function getFavourites() {
    try{
        const res = await api.get<Favorites>("/favourites")
        return res.data
    }catch(err: any){
        throw new Error(err?.response?.data?.message || "Favoriler bulunamadı")
    }
}