"use client"

import { useState, useEffect, Suspense } from "react"
import ProductCard from "@/features/components/productCard"
import SearchBar from "@/features/components/searchbar"
import { PaginationRequest, Product } from "@/lib/types/types"
import { getProducts } from "@/lib/api/products/useGetProducts"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

function HomePageContent() {
  const [products, setProducts] = useState<Product[]>([]);
  const searchParams = useSearchParams()
  const brand = parseInt(searchParams.get('brand') || '0')
  const category = parseInt(searchParams.get('category') || '0')
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() =>{
    const fetchData = async () =>{
      const request: PaginationRequest = {
        page:1,
        search:searchQuery,
        brand:brand || 0,
        category: category || 0,
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
  }, [searchQuery, brand, category]);

  const handleSearchSubmit = (searchTerm: string) => {
    setSearchQuery(searchTerm)
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl md:test-4xl font-bold mb-4 text-center">2. El Ürün Ara</h1>
      <p className="text-center text-gray-600 mb-8">Aradığınız ürünü satıcılardan uygun fiyata alın!</p>
      <SearchBar onSearchSubmit={handleSearchSubmit} />
      { products?.length >0 ?(
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
        {products?.map((product)=> (
          <Link key={product.id} href={`/product/${product.id}`}>
          <ProductCard key={product.id} product={product} />
          </Link>
        ))}  
      </div>  
      ):(<p className="text-center border rounded-2xl p-4">Arama kriterlerinize uygun ürün bulunamadı.</p>)
    }
    </main>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={<div>Yükleniyor...</div>}>
      <HomePageContent />
    </Suspense>
  )
}
