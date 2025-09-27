import React from "react";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";
import { ProductDetail } from "@/lib/types/types";

interface ProductDetailCardProps {
    product: ProductDetail
}

const ProductDetailCard: React.FC<ProductDetailCardProps> = ({ product }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 py-8 shadow-md">
            <div className="flex flex-col items-center">
                <Image
                    src={product?.Product.image_url || "/placeholder.png"}
                    alt={product?.Product?.name || "Ürün resmi"}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    width={300}
                    height={200}
                    className="rounded-lg"
                />
            </div>

            
            <div>
                <p className="text-blue-500 font-bold text-lg mb-2 text-center">
                    {product.Product.price
                        ? product.Product.price + " ₺"
                        : "Fiyat bilgisi yok"}
                </p>

                {product?.Attribute && product.Attribute.length > 0 ? (
                    <ul className="list-none list-inside space-y-1">
                        {product.Attribute.map((attr, index) => (
                            <li key={index} className="text-gray-700 border border-black rounded-2xl text-center p-4">
                                {attr.attribute_name}: {attr.value}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-400 text-center">Özellik bilgisi yok.</p>
                )}
            </div>

            
            <div className="flex flex-col items-center gap-2 h-auto w-full pt-2">
                <h3 className="font-bold">Satıcı Bilgileri</h3><br></br>
                <p>{product.Product.seller_name}</p>

                
                <Link href={`tel:${product.Product.seller_phone}`}>
                    <Button className="bg-blue-500 text-white font-bold w-full p-4">
                        İletişime Geç
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetailCard;
