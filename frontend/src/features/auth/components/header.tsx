import React from "react";
import Image from "next/image";
import Button from "./button";
import Link from "next/link";
interface headerProbs{
     user?: {
        id: number,
        email: string,
        phone: string,
        name: string,
        surname: string,
        gender: number,
    }
}


const Header: React.FC<headerProbs> = ({user}) => {
    return(
        <header className="fixed top-0 left-0 right-0 h-16 bg-white border-t shadow-lg p-4 z-50 w-full flex justify-between items-center">
            <Link href="/">
            <Image src={"/logo.png"} alt="logo" width={180} height={80} />

            </Link>
            {!user ? (
                <Link href="login" className="w-32">
                    <Button variant="primary" className="h-10 w-full">Giriş yap</Button>
                </Link>

            ) : (
                 <div>
        <span>Merhaba, {user.name}</span>
    </div>
            )}
        </header>
    )
}

export default Header