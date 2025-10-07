import React from "react";
import Image from "next/image";
import { Product } from "@/lib/types/types";

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <div className="flex flex-col border border-black rounded-2xl p-4 h-full">
            <div className="flex justify-center items-center w-full h-full">
                <Image
                src={product?.image_url || "/placeholder.png"}
                alt={product?.name}
                width={150}
                height={100}
                className="rounded-lg object-cover"
            />
                </div>
            <p className="font-bold text-black mt-2">{product.name}</p><br></br>
            <div className="flex justify-between w-full">
                <p className="font-bold text-blue-500 mt-1">
                {product.price ? String(product.price / 100 ) + " ₺" : "Fiyat bilgisi yok"}
                </p>
                <p className="font-bold text-black">{product.seller_name}</p>
            </div>
            
        </div>
    );
};

export default ProductCard;
