
import { AxiosError } from "axios";
import { api } from "../apiClient";
import { FavoritesListResponse } from "@/lib/types/types";

export async function getFavourites(): Promise<FavoritesListResponse> {
    try{
        const res = await api.get("/favourites")
        
        // Transform controller response to match expected type structure
        const response: FavoritesListResponse = {
            success: true,
            message: "Favoriler başarıyla getirildi",
            data: {
                favourites: res.data.favourites || [],
                pagination: {
                    page: 1
                }
            }
        };
        
        return response;
    }catch(err: unknown){
        const error = err as AxiosError<{ message: string }>;
        throw new Error(error?.response?.data?.message || "Favoriler bulunamadı")
    }
}