import { Product } from "@/lib/types/types";
import Button from "../button";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProbs{
  product: Product
}
const ProductCard = ({product}: ProductCardProbs) =>{
  return(
    <div className="border rounded-lg shadow-md flex flex-col transition-transform duration-300 hover:scale-105">
      <div className="relative w-full h-48">
      <Image src={product.image_url || "/placeholder.png"} alt={product.name} layout="fill" objectFit="contain" className="rounded-t-lg" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 truncate text-center">{product.name}</h3>
        <div className="mt-4 flex gap-2">
          <Link href={`/product/${product.id}`} className="w-full" >
          <Button variant="secondary">Detaylar</Button>
          </Link>
          <Button variant="primary">Karşılaştır</Button>
        </div>
      </div>
    </div>

  );
};

export default ProductCard;