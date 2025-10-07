import { AxiosError } from "axios";
import { api } from "../apiClient";
import { CreateCategoryRequest, CreateCategoryResponse} from "@/lib/types/types";

export async function addCategory(data: CreateCategoryRequest): Promise<CreateCategoryResponse> {
    try{
      const res = await api.post("/admin/categories",data);
      
      // Transform controller response to match expected type structure
      const response: CreateCategoryResponse = {
          success: true,
          message: "Kategori başarıyla eklendi",
          data: {
              category: res.data.category
          }
      };
      
      return response;
    }catch(err: unknown){ 
      const error = err as AxiosError<{ message: string }>;
      throw new Error(error?.response?.data?.message ||"Kategori eklenemedi")
    }
}