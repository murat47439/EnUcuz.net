"use client"

import { useState, useEffect } from "react"
import ProductCard from "@/features/auth/components/products/useProductCard"
import SearchBar from "@/features/auth/components/searchbar"
import { PaginationRequest, Product } from "@/lib/types/types"
import { getProducts } from "@/lib/api/products/useGetProducts"


export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() =>{
    const fetchData = async () =>{
      const request: PaginationRequest = {
        page:1,
        search:searchQuery
      };
      try{
        const data = await getProducts(request);
        setProducts(data.Products || []);
      }catch(err){
        console.error(err)
        setProducts([]);
      }
    }
      fetchData();
  }, [searchQuery]);

  const handleSearchSubmit = (searchTerm: string) => {
    setSearchQuery(searchTerm)
  };

  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:test-4xl font-bold mb-4 text-center">Cihaz Karşılaştır</h1>
      <p className="text-center text-gray-600 mb-8">Aradığınız ürünü bulun ve karşılaştırın</p>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      { products?.length >0 ?(
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products?.map((product)=> (
          <ProductCard key={product.id} product={product} />
        ))}  
      </div>  
      ):(
        <p className="text-center border rounded-2xl p-4">Arama kriterlerinize uygun ürün bulunamadı.</p>
      )
    }
    </main>
  )
}