"use client"
import React from "react";
import { useState } from "react";
import { Product } from "@/lib/types/types";
import { addProduct } from "@/lib/api/products/useAdd";
import Input from "@/features/components/input";
import { ImagePlus } from "lucide-react";


export default function newProductPage() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [stock, setStock] = useState(1)
    const [price, setPrice] = useState(0)
    const [brand, setBrand] = useState(0)
    const [image, setImage] = useState('')
    const [category, setCategory] = useState(0)

    const [result, setResult] = useState('')

    const handleNewProduct = async (e: React.FormEvent) => {
        e.preventDefault()
        const request : Product = {
            name: name,
            description: description,
            stock: stock,
            price: price,
            brand_id: brand,
            image_url:image,
            category_id: category
        };
        try{switch (true) {
            case (name.length < 10):
                setResult("Ürün adı minimum 10 karakter olmalı.");
                return;

            case (description.length < 250): // buradaki 100'ü 250 ile değiştirdim çünkü mesajda öyle demişsin
                setResult("Ürün açıklaması minimum 250 karakter olmalı.");
                return;

            case (brand === 0):
                setResult("Lütfen marka seçiniz.");
                return;

            case (category === 0):
                setResult("Lütfen kategori seçiniz.");
                return;

            default:
                setResult(""); // Hata yoksa sonucu temizle
                break;
        }
            const prod = await addProduct(request)
            setResult('Ürün başarıyla eklendi.')
        }catch(err: unknown){
            if (err instanceof Error){
                setResult(err.message)
            }else{
                setResult('Bir hata oluştu.')
            }
        }
    }
    

    return(
    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] justify-around   w-auto p-4 gap-4 ml-auto">
        <div>
            <h2 className="text-center font-bold">Ürün bilgileri</h2>
            <form onSubmit={handleNewProduct} className="mt-10">
                <label className="grid grid-cols-2 gap-4 items-center"> Ürün adı <Input required name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} /></label>
                <label className="grid grid-cols-2 gap-4 mt-10 items-center"> Açıklama <Input required name="description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} /></label>
                <label className="grid grid-cols-2 gap-4 mt-10 items-center"> Marka <Input required name="brand" type="number" value={brand} onChange={(e) => setBrand(Number(e.target.value))} /></label>
                <label className="grid grid-cols-2 gap-4 mt-10 items-center"> Kategori <Input required name="category" type="number" value={category} onChange={(e) => setCategory(Number(e.target.value))} /></label>
                <label className="grid grid-cols-2 gap-4 mt-10 items-center"> Fiyat <Input required name="price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} /></label>
                <label className="grid grid-cols-2 gap-4 mt-10 items-center"> Stok(İsteğe bağlı) <Input name="stock" type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} /></label>

            </form>
        </div>
        <div className="border-l hidden sm:block w-0.5 border-gray-900"></div>
        <div>
            <h2 className="text-center font-bold">Ürün Resimleri</h2>
            <ImagePlus className="mt-10 mx-auto" size={75} />
        </div>
    </div>
    );
}