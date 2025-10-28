import React from "react";
import { Hourglass } from "lucide-react";

export default function messagesPage(){
    return (
       <div className="w-full h-full fixed top-0 left-0 flex flex-col justify-center items-center bg-white/50 z-50 pointer-events-none">
  <Hourglass size={50} className="pointer-events-auto" />
  <span className="mt-4 text-black font-bold text-lg pointer-events-auto">Çok Yakında</span>
</div>



    )
}