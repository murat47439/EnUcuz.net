"use client";
import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { getProducts } from "@/lib/api/products/useGetProducts";
import { PaginationRequest } from "@/lib/types/types";
import { ProductsListResponse } from "@/lib/types/types";


interface SearchBarProbs{
    onSearchSubmit: (searchTerm:string) => void;
}

const SearchBar = ({onSearchSubmit} : SearchBarProbs) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        onSearchSubmit(searchTerm)
                      
    };


    return(
        <form onSubmit={handleSearch} className="w-full max-w-xl mx-auto mb-8">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none:">
                    <Search className="text-gray-400" size={20}></Search>
                </div>
                <input type="text" placeholder="Ürün ara..." value={searchTerm} onChange={ (e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg  focus:ring-blue-500 focus:border-blue-500 transition" 
                />
            </div>
        </form>
    )
};

export default SearchBar;