import { getProduct } from "@/lib/api/products/useGetProduct";
import ProductDetailCard from "@/features/components/productDetailCard";
import { notFound } from "next/navigation";
import { IdParam } from "@/lib/types/types";
import Link from "next/link";

export default async function ProductDetailPage({params} : {params : {id : number}}) {
    const request: IdParam = {
        id: params.id
    }

    const product = await getProduct(request)
    console.log(product.data.Product)
    if(!product){
        notFound()
    }
    return (
        <main className="container mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-bold text-center mb-16">{String(product.data.Product.name) }</h1>
            <h4 className="text-blue-400"><u>
                <Link href={{pathname: "/",
                query: { category: product.data.Product.category_id },
                }}>{product.data.Product.category_name}</Link>
                </u>
                 - <u><Link href={{pathname: "/",
                    query: { brand: product.data.Product.brand_id },}}>{product.data.Product.brand_name}</Link></u></h4>

            <ProductDetailCard product={product}/>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] shadow-md p-4">
                <div>
                    <h2 className="font-bold text-center">Açıklama</h2>
                    <p className="px-10 py-4">{product.data.Product.description}</p>
                </div>
                <div className="border-l hidden sm:block w-0.5 border-gray-900"></div>
                <div>
                    <h2 className="font-bold text-center">Ürün Resimleri</h2>
                </div>
            </div>
        </main>
    );
} 