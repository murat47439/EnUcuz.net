"use client"
import React from "react";
import { useComparison } from "@/context/ComparisonContext";
import Link from "next/link";
import Button from "../button";

const ComparisonBar = () => {
    const {comparisonList, removeAll} = useComparison()
    if (comparisonList.length === 0){
        return null
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4 z-50 text-center">
            <div>
                <h3 className="font-semibold"> Karşılaştırma Listesi:</h3>
                <p className="text-sm text-gray-600">
                    {comparisonList.length} ürün seçtiniz.
                </p>
            </div>
            <div className="grid grid-cols-2">
            <Link href="/compare">
                <Button > Karşılaştır {comparisonList.length}</Button>
            </Link>
            <Button onClick={removeAll}> Temizle</Button>
            </div>
        </div>
    );
};
export default ComparisonBar
