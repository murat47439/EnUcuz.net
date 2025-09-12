import { api } from "../apiClient";
import { CreateCategoryRequest, CreateCategoryResponse, Category } from "@/lib/types/types";

export async function addCategory(data: CreateCategoryRequest) {
    try{
      const res = await api.post<CreateCategoryResponse>("/admin/categories",data);
      return res.data
    }catch(err: any){ 
      throw new Error( err.response?.data?.message ||"Kategori eklenemedi")
    }
}