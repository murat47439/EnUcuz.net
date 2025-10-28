"use client"
import React, { useEffect, useState } from "react";
import Button from "@/features/components/button";
import Input from "@/features/components/input";
import Image from "next/image";
import { useAuth } from "@/context/authContext";
import { getUserProfile } from "@/lib/api/user/useProfile";
import { UserProfileResponse } from "@/lib/types/types";
import { useForm } from "react-hook-form";
import { updateUser } from "@/lib/api/user/useUpdate";
import { UpdateUserRequest } from "@/lib/types/types";
type FormData = {
    name: string,
    surname: string,
    email: string,
    phone: string
}
export default function ProfilePage() {
    const [user, setUser] = useState<UserProfileResponse>()
    const [result, setResult] = useState("")
    const methods = useForm<FormData>({
        defaultValues : {
        name: user?.data.user.name,
        surname: user?.data.user.surname,
        email: user?.data.user.email,
        phone: user?.data.user.phone
        }

    })
    const {logout} = useAuth();
    const {register, handleSubmit, setValue,control, watch, formState: {errors}} = methods;
    useEffect(()=> {
        (async () =>{
            try{
                const data = await getUserProfile()
                if (!data.data.user) window.location.href = "/login"
                setUser(data)
            }catch(err){
                window.location.href = "/login";
            }
        })()
    }, []);
    if (!user) return <div>Yükleniyor...</div>

    const onSubmit = async(data: FormData) => {
        try{
            if(data.email == "" ||data.phone == "" || data.name == "" || data.surname == "") throw new Error("Lütfen tüm alanları doldurun.")
            const request : UpdateUserRequest = {
                id: user?.data.user.id,
                email: data.email,
                phone: data.phone,
                name: data.name,
                surname: data.surname
            }
            await updateUser(request)
            setResult("Profil başarıyla güncellendi");
            const timer= setTimeout(() => {
                setResult("")
            }, 2000);
        }catch(err: unknown){
            if (err instanceof Error) setResult(err.message)
            else setResult("Bir hata oluştu")
            const timer= setTimeout(() => {
                setResult("")
            }, 2000);
            
        }
    }
    return (
       <main className="container mx-auto p-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-lg shadow-lg">
    
    {/* Kullanıcı Profili */}
    <div className="flex flex-col items-center">
      <Image
        src="/default.png"
        className="rounded-full border border-gray-200"
        alt={user.data.user.name}
        width={120}
        height={120}
      />
      <h2 className="mt-4 text-2xl font-extrabold text-gray-800">{user.data.user.name}</h2>
      <p className="text-sm text-gray-500">{user.data.user.gender}</p>
    </div>

    {/* Kişisel Bilgiler Başlığı */}
    <div className="flex flex-col justify-center">
      <h2 className="text-xl font-bold text-blue-600 border-b-2 border-blue-200 pb-2">
        Kişisel Bilgiler
      </h2>
    </div>
  </div>

  {/* Form */}
  <form
    className="mt-12 bg-white p-6 rounded-lg shadow-lg space-y-6"
    onSubmit={handleSubmit(onSubmit)}
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Ad */}
      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Ad</label>
        <Input
          {...register("name", { required: "Lütfen tüm alanları doldurun." })}
          type="text"
          defaultValue={user.data.user.name ?? ""}
          name="name"
          className="mt-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Soyad */}
      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Soyad</label>
        <Input
          {...register("surname", { required: "Lütfen tüm alanları doldurun." })}
          type="text"
          defaultValue={user.data.user.surname ?? ""}
          name="surname"
          className="mt-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Telefon */}
      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Telefon</label>
        <Input
          {...register("phone", { required: "Lütfen tüm alanları doldurun." })}
          type="tel"
          defaultValue={user.data.user.phone ?? ""}
          name="phone"
          className="mt-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label className="font-medium text-gray-700">Email</label>
        <Input
          {...register("email", { required: "Lütfen tüm alanları doldurun." })}
          type="email"
          defaultValue={user.data.user.email ?? ""}
          name="email"
          className="mt-2 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

    </div>

    {/* Sonuç Mesajı */}
    {result && (
      <p className="text-green-600 text-center font-medium">{result}</p>
    )}

    {/* Gönderme Butonu */}
    <div className="flex justify-end">
      <Button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
      >
        Kaydet
      </Button>
    </div>
  </form>

  <form className="mt-12 bg-white p-6 rounded-lg shadow-lg space-y-6 ">
        <h1 className="text-blue-500 text-center font-bold text-xl border-b-2 border-blue-200">Şifre Değiştirme</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <span>Eski Şifre: <Input></Input></span>
        <span>Yeni Şifre: <Input></Input></span>
        <span>Yeni Şifre (Tekrar)   : <Input></Input></span>
        </div>
        
        <Button type="submit">Şifreyi Değiştir</Button>
  </form>
  <div className="w-full flex justify-end mt-4"><Button className="text-white bg-red-700 p-4 " style={{width: "150px "}} onClick={logout}>Çıkış yap</Button></div>
</main>
    )
}