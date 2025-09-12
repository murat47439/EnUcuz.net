import { getProduct } from "@/lib/api/products/useGetProduct";
import ProductDetailCard from "../../../features/auth/components/products/useProductDetailCard";
import { notFound } from "next/navigation";
import { IdParam } from "@/lib/types/types";


// ✅ Statik export için gerekli
export async function generateStaticParams() {
  // Burada ürün id'lerini API'den çekiyoruz
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/id`);
  const products = await res.json();

  return products.map((product: { id: number }) => ({
    id: product.id.toString(), // string dönmek zorunda!
  }));
}
export default async function ProductDetailPage({params} : {params : {id : number}}) {
    const request: IdParam = {
        id: params.id
    }

    const product = await getProduct(request)
    if(!product){
        notFound()
    }
    return (
        <main className="container mx-auto p-4 md:p-8">
            <h1 className="text-3xl font-bold mb-6 text-center mb-16">{product.Product.name}</h1>

            <ProductDetailCard product={product}/>
        </main>
    );
} 