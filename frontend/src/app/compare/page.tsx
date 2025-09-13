"use client"
import { useComparison } from "@/context/ComparisonContext";
import React from "react";
import ComparisonTable from "@/features/auth/components/compare/useCompate";
import Link from "next/link";

export default function ComparePage(){
    const {comparisonList} = useComparison();
    return (
            <main className="container mx-auto p-4 md:p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Ürün Karşılaştırma
              </h1>
        
              {comparisonList.length > 0 ? (
                // Listede ürün varsa, tablo bileşenini göster
                <ComparisonTable products={comparisonList} />
              ) : (
                // Listede ürün yoksa, bir mesaj ve link göster
                <div className="text-center">
                  <p className="text-xl text-gray-600 mb-4">
                    Karşılaştırmak için henüz bir ürün seçmediniz.
                  </p>
                  <Link href="/" className="text-blue-600 hover:underline font-semibold">
                    Ürünlere göz atmak için ana sayfaya dönün.
                  </Link>
                </div>
              )}
            </main>
    )
}

