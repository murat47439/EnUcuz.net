"use client"
import {  useAuth } from "@/context/authContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/features/components/input";
import Button from "@/features/components/button";
import React from "react";
import { LoginRequest,RegisterRequest } from "@/lib/types/types";
import { loginUser } from "@/lib/api/user/useLogin";
import { registerUser } from "@/lib/api/user/useRegister";


export default function LoginPage() {
    const router = useRouter()
    
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [surname,setSurname] = useState('');
    const [phone, setPhone] = useState('+90')


    const [password, setPassword] = useState('');
    const [regpassword, setregPassword] = useState('');
    const [reg1password, setreg1Password] = useState('');


    const [result, setResult] = useState('');
    const {setUser} = useAuth()
    const [login, setLogin] = useState(true)
    const [register, setRegister] = useState(false)

    const handleLoginForm = async (e: React.FormEvent) => {
        e.preventDefault();
        const request : LoginRequest = {
            email: email,
            password: password,
        };
        
        
        try{
            const login = await loginUser(request)
            setUser(login.user)
            localStorage.setItem("user", JSON.stringify(login.user))
            setResult('Giriş başarılı.');
            router.push("/");
        }catch(err:unknown){
            if (err instanceof Error){
                setResult(err.message)
            }else{
                setResult('Bir hata oluştu.');
            }
        }
    };
    const handleRegisterForm = async(e: React.FormEvent) => {
        e.preventDefault()
        const request: RegisterRequest = {
            name: name,
            surname: surname,
            email: email,
            password: regpassword,
            phone: phone,
        };
        try{
        switch (true) {
    case (!name || name.trim() === ""):
        setResult("Ad boş bırakılamaz");
        return;

    case (!surname || surname.trim() === ""):
        setResult("Soyad boş bırakılamaz");
        return;

    case (!email || email.trim() === ""):
        setResult("Email boş bırakılamaz");
        return;

    case (!phone || phone.trim() === ""):
        setResult("Telefon numarası boş bırakılamaz");
        return;

    case (!regpassword || regpassword.trim() === ""):
        setResult("Şifre boş bırakılamaz");
        return;

    case (reg1password !== regpassword):
        setResult("Şifreler uyuşmuyor");
        return;

    case (regpassword.length < 8):
        setResult("Şifre en az 8 karakter olmalı");
        return;
    }
        const register = await registerUser(request)
           setResult('Başarılı')
        }catch(err: unknown){
            if (err instanceof Error){
                setResult(err.message)
            }else{
                setResult('Bir hata oluştu.');
            }
        }
    }

    return(
        <div className="max-w-md mx-auto mt-10">
            <div className="grid grid-cols-2 ">
                <Button className="bg-gray-800 hover:bg-gray-500" onClick={() => {setLogin(true); setRegister(false)}}>Giriş</Button>
            <Button className="bg-gray-800 hover:bg-gray-500" onClick={() => {setLogin(false); setRegister(true)}}>Kayıt ol</Button>
            </div>
            
            {login && (
                <div className="grid grid-cols-1 max-w-md mx-auto mt-10 gap-4">
            <form onSubmit={handleLoginForm} className="flex flex-col gap-4">
                <Input required type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Input required type="password" name="password" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type="submit">Giriş yap</Button>
            </form>
            
        </div>
            )}
            {register && (
                <div className="grid grid-cols-1 max-w-md mx-auto mt-10 gap-4">
                    <form onSubmit={handleRegisterForm} className="flex flex-col gap-4">
                        <div className="grid grid-cols-2 gap-4">
                            <Input required type="text" name="name" placeholder="Ad" value={name} onChange={(e) => setName(e.target.value)}></Input>
                            <Input required type="text" name="surname" placeholder="Soyad" value={surname} onChange={(e) => setSurname(e.target.value)}></Input>
                            
                        </div>
                        <Input required type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <Input required type="tel" name="phone" placeholder="Telefon numarası" value={phone} onChange={(e) => setPhone(e.target.value)} />

                        <Input required type="password" name="password" placeholder="Şifre" value={regpassword} onChange={(e) => setregPassword(e.target.value)} />
                        <Input required type="password" name="password" placeholder="Şifre Tekrar" value={reg1password} onChange={(e) => setreg1Password(e.target.value)} />
                        <Button type="submit">Kayıt ol</Button>
                    </form>
                </div>
            )}
            {result && <p className="text-center mt-2 text-black">{result}</p>}
        
        </div>
    )
}