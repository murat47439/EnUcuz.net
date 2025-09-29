"use client"
import React, { useEffect, useState } from "react";
import { Brand, Category, Product } from "@/lib/types/types";
import { PaginationRequest } from "@/lib/types/types";
import { addProduct } from "@/lib/api/products/useAdd";
import { getBrands } from "@/lib/api/brands/useGets";
import { GetCategories } from "@/lib/api/categories/useGets";
import Input from "@/features/components/input";
import Button from "@/features/components/button";
import dynamic from "next/dynamic";
const Select = dynamic(() => import("react-select"), { ssr: false });
import { ImagePlus, FileImage } from "lucide-react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
    name: string,
    description: string,
    price: number | null,
    stock: number,
    brand: {value: number; label: string} | null;
    category: {value: number; label: string} | null;
    files: File[]
}

export default function NewProductPage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [stock, setStock] = useState(1);
    const [price, setPrice] = useState<number| null>(null);
    const [brand, setBrand] = useState<{ value: number; label: string } | null>(null);

    const [image, setImage] = useState("");
    const [category, setCategory] = useState<{ value: number; label: string } | null>(null);
    const [files, setFiles] = useState<File[]>([]);
    const [result, setResult] = useState("");

    const [brands, setBrands] = useState<Brand[]>([]);
    const [searchBrands, setSearchBrands] = useState("");
    const [categories, setCategories] = useState<Category[]>([]);
    const [searchCategories, setSearchCategories] = useState("");

    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const fetchBrands = async () => {
                const request: PaginationRequest = { search: searchBrands };
                try {
                    const data = await getBrands(request);
                    setBrands(data.brands);
                } catch (err) {
                    console.error(err);
                    setBrands([]);
                }
            };
            fetchBrands();
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [searchBrands]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            const fetchCategories = async () => {
                const request: PaginationRequest = { search: searchCategories };
                try {
                    const data = await GetCategories(request);
                    setCategories(data.categories);
                } catch (err) {
                    console.error(err);
                    setCategories([]);
                }
            };
            fetchCategories();
        }, 500);
        return () => clearTimeout(timeoutId);
    }, [searchCategories]);

    const handleChangeFileCount = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        const selectedFiles = Array.from(e.target.files);
        if (selectedFiles.length > 8) {
            setResult("En fazla 8 adet dosya seçebilirsiniz.");
            e.target.value = "";
            setFiles([]);
            return;
        }

        setFiles(selectedFiles);
    };

    const handleNewProduct = async (e: React.FormEvent) => {
        e.preventDefault();
        const request: Product = {
            name: name,
            description : description,
            stock : stock,
            price : price ?? 0,
            brand_id: brand?.value || 0,
            image_url: image,
            category_id: category?.value || 0
        };

        try {
            switch (true) {
                case name.length < 10:
                    setResult("Ürün adı minimum 10 karakter olmalı.");
                    return;

                case description.length < 250:
                    setResult("Ürün açıklaması minimum 250 karakter olmalı.");
                    return;

                case !brand:
                    setResult("Lütfen marka seçiniz.");
                    return;

                case !category:
                    setResult("Lütfen kategori seçiniz.");
                    return;
                case stock <1:
                    setResult("Geçersiz stok")
                    return;
                default:
                    setResult("");
                    break;
            }

            await addProduct(request);
            setResult("Ürün başarıyla eklendi.");
        } catch (err: unknown) {
            if (err instanceof Error) {
                setResult(err.message);
            } else {
                setResult("Bir hata oluştu.");
            }
        }
    };

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] justify-around w-auto p-4 gap-4 ml-auto">
                <div>
                    <h2 className="text-center font-bold">Ürün bilgileri</h2>
                    <h4 className="text-center text-gray-600">
                        Ürün bilgilerini detaylı ve anlaşılır şekilde ekleyin.
                    </h4>

                    <form onSubmit={handleNewProduct} className="mt-10">
                        <label className="grid grid-cols-2 gap-4 items-center">
                            Ürün adı
                            <Input
                                required
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </label>

                        <label className="grid grid-cols-2 gap-4 mt-10 items-center">
                            Açıklama
                            <Input
                                required
                                name="description"
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </label>

                        <label className="grid grid-cols-2 gap-4 mt-10 items-center">
                            Marka
                           <Select
                                options={brands?.map((b) => ({
                                    label: b.name,
                                    value: b.id
                                }))}
                                value={brand}
                                onChange={(option) => setBrand(option  as {value: number ; label: string} | null)}
                                onInputChange={(inputValue) => setSearchBrands(inputValue)}
                                placeholder="Marka seçin..."
                                isClearable
                                noOptionsMessage={() => "Sonuç bulunamadı"}
                                />
                        </label>

                        <label className="grid grid-cols-2 gap-4 mt-10 items-center">
                            Kategori
                            <Select
                                options={categories?.map((b) => ({
                                    label: b.name,
                                    value: b.id
                                }))}
                                value={category}
                                onChange={(option) => setCategory(option as {value: number ; label: string} | null)}
                                onInputChange={(inputValue) => setSearchCategories(inputValue)}
                                placeholder="Kategori seçin..."
                                isClearable
                                noOptionsMessage={() => "Sonuç bulunamadı"}
                                />
                        </label>

                        <label className="grid grid-cols-2 gap-4 mt-10 items-center">
                            Fiyat
                            <Input
                                required
                                name="price"
                                type="number"
                                min={0.01}
                                value={price && price !== 0 ? price : ""}
                                onChange={(e) => setPrice(Number(e.target.value))}
                            />
                        </label>

                        <label className="grid grid-cols-2 gap-4 mt-10 items-center">
                            Stok(İsteğe bağlı)
                            <Input
                                name="stock"
                                type="number"
                                value={stock && stock !== 0 ? stock : ""}
                                min={0.01}
                                onChange={(e) => setStock(Number(e.target.value))}
                            />
                        </label>
                    </form>
                </div>

                <div className="border-l hidden sm:block w-0.5 border-gray-900"></div>

                <div>
                    <h2 className="text-center font-bold">Ürün Resimleri</h2>
                    <h4 className="text-center text-gray-600">
                        8 adet fotoğraf yüklemelisiniz.
                    </h4>
                    <ImagePlus className="mt-10 mx-auto" size={75} />

                    <Input
                        id="fileinput"
                        hidden
                        onChange={handleChangeFileCount}
                        required
                        type="file"
                        multiple
                        accept="image/*"
                    />
                    <label
                        htmlFor="fileinput"
                        className="cursor-pointer px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-700 flex gap-4 items-center mx-auto mt-20"
                    >
                        <FileImage size={30} />
                        Fotoğrafları yükle (MAX 8)
                    </label>

                    {files.length > 0 && (
                        <div className="grid grid-cols-4 gap-4">
                            {files.map((file, idx) => (
                                <div
                                    key={idx}
                                    className="flex flex-col items-center mt-4"
                                >
                                    <img
                                        src={URL.createObjectURL(file)}
                                        alt={file.name}
                                        className="w-24 h-24 object-cover rounded-lg shadow"
                                    />
                                    <p className="text-center text-gray-600">
                                        {file.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <p className="text-center text-black mt-4 pb-4">{result}</p>
            <Button>Sonraki adım</Button>
        </div>
    );
}
