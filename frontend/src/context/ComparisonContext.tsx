"use client"

import { createContext, useContext,useState,ReactNode } from "react"
import {  Product, ProductDetailResponse, IdParam } from "@/lib/types/types"
import { getProduct } from "@/lib/api/products/useGetProduct"

interface ComparisonContextType{
    comparisonList: ProductDetailResponse[]
    addProduct: (product:Product) => void
    removeProduct: (productId: number) => void 
    removeAll: () => void
}
const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined)


export const useComparison = () =>{
    const context = useContext(ComparisonContext);
    if(context == undefined){
        throw new Error("useComparison, ComparisonProvider içinde kullanılmalıdır.")
    }
    return context
}

interface ComparisonProviderProbs{
    children:ReactNode
}

export const ComparisonProvider = ({children} : ComparisonProviderProbs) => {
    const [comparisonList,setComparisonList] = useState<ProductDetailResponse[]>([]);

    const addProduct = async (product: Product) =>{
        const request : IdParam = {
            id: product.id
        }
        const productDetail =await getProduct(request)
        const isAlreadyAdded = comparisonList.some(p=>p.Product.id === product.id)

        if (!isAlreadyAdded && comparisonList.length <4 ){
            setComparisonList(prevList => [...prevList, productDetail]);
        }
    }
    
    const removeProduct = (productId: Number) => {
        setComparisonList(prevlist => prevlist.filter(p => p.Product.id !== productId));
    }
    const removeAll = () => {
        setComparisonList([])
    }
    const value = {
        comparisonList,
        addProduct,
        removeProduct,
        removeAll
    };
    return (
        <ComparisonContext.Provider value={value}>
      {children}
    </ComparisonContext.Provider>
    );
};