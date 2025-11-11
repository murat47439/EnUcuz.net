import { getProduct } from "@/lib/api/products/useGetProduct";
import ProductDetailCard from "@/features/components/productDetailCard";
import { notFound } from "next/navigation";
import { IdParam } from "@/lib/types/types";
import Image from "next/image";
import Link from "next/link";

export default async function ProductDetailPage({params} : {params : {id : number}}) {
    const resolvedParams = await params; // async olarak çöz
    const request: IdParam = { id: Number(resolvedParams.id) };

    const product = await getProduct(request)
    if(!product){
        notFound()
    }
    return (
        <main className="container mx-auto px-4 py-6 md:py-8 max-w-7xl">
            {/* Başlık ve Etiketler */}
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-4 tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                    {String(product.data.product.name)}
                </h1>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                    <Link 
                        href={{pathname: "/",
                        query: { category: product.data.product.category_id },
                        }} 
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-300 text-sm font-semibold px-4 py-2 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800/40 dark:hover:to-blue-700/40 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        
                        {product.data.product.category_name}
                    </Link>
                    <Link 
                        href={{pathname: "/",
                        query: { brand: product.data.product.brand_id },
                        }} 
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold px-4 py-2 hover:from-indigo-100 hover:to-indigo-200 dark:hover:from-indigo-800/40 dark:hover:to-indigo-700/40 transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                        
                        {product.data.product.brand_name}
                    </Link>
                </div>
            </div>

            {/* Ürün Detay Kartı */}
            <div className="mb-8">
                <ProductDetailCard product={product}/>
            </div>

            {/* Açıklama ve Görseller Bölümü */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl p-6 md:p-8">
                {/* Açıklama Bölümü */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Açıklama</h2>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 md:p-6 border border-gray-200 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                            {product.data.product.description || "Bu ürün için açıklama bulunmamaktadır."}
                        </p>
                    </div>
                </div>

                {/* Ayırıcı Çizgi */}
                <div className="hidden lg:block w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

                {/* Ürün Resimleri Bölümü */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Ürün Resimleri</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Array.isArray(product.data.product?.image_urls) && product.data.product.image_urls.length > 0 ? (
                            product.data.product.image_urls.map((image, index) => (
                                <div
                                    key={index}
                                    className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
                                >
                                    <Image
                                        src={image}
                                        alt={`${product.data.product.name} - Görsel ${index + 1}`}
                                        width={300}
                                        height={300}
                                        className="object-contain w-full h-full p-4 group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12 px-6 bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700">
                                <svg className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-500 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <p className="text-gray-500 dark:text-gray-400 font-medium">Bu ürün için görsel bulunmamaktadır.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
} 