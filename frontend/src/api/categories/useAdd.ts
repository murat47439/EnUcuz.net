import { api } from "../apiClient";
import { AddCategoryData,AddCategoryResponse, Category } from "@/lib/types/types";

export async function addCategory(data:AddCategoryData) {
    try{
      const res = await api.post<AddCategoryResponse>("/admin/categories",data);
      return res.data
    }catch(err: any){ 
      throw new Error( err.response?.data?.message ||"Kategori eklenemedi")
    }
}