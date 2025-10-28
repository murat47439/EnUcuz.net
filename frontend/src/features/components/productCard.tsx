import { useState } from "react";
import { useToast } from "@/context/toastContext";
import React from "react";
import Image from "next/image";
import { Product } from "@/lib/types/types";
import { LucideHeart, HeartMinus } from "lucide-react";
import { addFavorite } from "@/lib/api/favorites/useAdd";
import { removeFavorite } from "@/lib/api/favorites/useRemove";
import { IdParam } from "@/lib/types/types";
import Link from "next/link";
interface ProductCardProps {
    product: Product;
    favori?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, favori = false }) => {
    
   const {showNotification} = useToast();

    const addFavori = async (data: Product) => {
        try{
            if (data.id == 0) return;
            await addFavorite(data)
            showNotification('Ürün favorilere başarıyla eklendi.', 'success', 4000); // 4 saniye kalsın
        }catch(err){
            if (err instanceof Error) console.log(err);
            showNotification('Hata oluştu: Ürün eklenemedi.' + err, 'error');
        }
    }

    const removeFavori = async (id : number ) => {
        try{
            if (id == 0) return;
            const request : IdParam = {
                id: id
            }
            await removeFavorite(request)
            showNotification('Ürün favorilerden silindi', 'success', 4000)
        }catch(err){
            if (err instanceof Error) console.log(err);
            showNotification('Hata oluştu: Ürün silinemedi.' + err, 'error')
        }
    }
    return (
        
        <Link key={product.id} href={`/product/${product.id}`}>
        <div className="flex flex-col border max-w-full border-black rounded-2xl p-4 h-full relative">
         {favori ? (
            
            <button
                className="absolute top-4 right-4"
                onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                removeFavori(product.id || 0);
                }}
            >
                <HeartMinus color="black" />
            </button>
            ) : (
            <button
                className="absolute top-4 right-4"
                onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addFavori(product);
                }}
            >
                <LucideHeart />
            </button>
        )}

            <div className="flex justify-center items-center w-full h-full">
                <Image
                src={product?.image_url || "/placeholder.png"}
                alt={product?.name}
                width={150}
                height={100}
                className="rounded-lg object-cover"
            />
                </div>
            <p className="font-bold text-black mt-2 max-w-full truncate">{product.name}</p><br></br>
            <div className="flex justify-between w-full">
                <p className="font-bold text-blue-500 mt-1">
                {product.price ? String(product.price / 100 ) + " ₺" : "Fiyat bilgisi yok"}
                </p>
                <p className="font-bold text-black">{product.seller_name}</p>
            </div>
            
        </div>
        </Link>
    );
};

export default ProductCard;
