"use client"
import React,{useEffect, useState} from "react";
import { useToast } from "@/context/toastContext";
import { getFavourites } from "@/lib/api/favorites/useGet";
import Link from "next/link";
import ProductCard from "@/features/components/productCard";
import { HeartMinus } from "lucide-react";
import { removeFavorite } from "@/lib/api/favorites/useRemove";
import { IdParam } from "@/lib/types/types";
import { Product } from "@/lib/types/types";

export default function favoritePage(){
    const [products, setProducts] = useState<Product[]>([]);
    const {showNotification} = useToast()
    useEffect(()=>{
        const fetchData = async () =>{
            try{
                const data = await getFavourites()
                setProducts(data.data.products)
            }catch(err){
                if (err instanceof Error) {
                setProducts([]);
                showNotification(err.message, 'error', 4000);
                }else{
                    showNotification('Bir hata oluştu', 'error', 4000)
                }
            }
        }
        fetchData();
    }, []);
    return (
        <main className="container mx-auto px-4 py-8">
        <h1 className="text-center font-extrabold mb-6 text-xl"> Favori Ürünlerim </h1>
        { products?.length >0 ?(
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {products?.map((product)=> (
         
          <ProductCard key={product.id} product={product} favori={true} />
          
        ))}  
      </div>  
      ):(<p className="text-center border rounded-2xl mt-8 p-4 text-gray-600">Henüz favorilere ürün yüklemediniz.</p>)
    }
    </main>
    )
}