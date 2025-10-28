"use client"
import React, {useEffect, useState} from "react"
import { GetUserProducts } from "@/lib/api/products/useGetUserProducts"
import { Product } from "@/lib/types/types"
import ProductCard from "@/features/components/productCard"
export default function ProfileProductPage(){
    const [products, setProducts] = useState<Product[]>([])

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const data = await GetUserProducts()
                
                setProducts(data.data.Products || [])
            }catch(err){
                console.error(err)
                setProducts([])
            }
        }
        fetchData();
    },[]
);
return (
    <main className="container mx-auto p-4">
        <h1 className="text-center font-bold mb-8 text-lg"> Ürünlerim </h1>
        { products?.length >0 ?(
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {products?.map((product)=> (
         
          <ProductCard key={product.id} product={product} />
          
        ))}  
      </div>  
      ):(<p className="text-center border rounded-2xl mt-8 p-4">Henüz ürün yüklemediniz.</p>)
    }
    </main>
)
}