
import { AxiosError } from "axios";
import { api } from "../apiClient";
import { Product } from "@/lib/types/types";

export async function getFavourites() {
    try{
        const res = await api.get<Product[]>("/favourites")
        return res.data
    }catch(err: unknown){
        const error = err as AxiosError<{ message: string }>;
        throw new Error(error?.response?.data?.message || "Favoriler bulunamadı")
    }
}