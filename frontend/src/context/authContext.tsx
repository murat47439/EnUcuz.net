"use client"

import { createContext, useContext,useState, ReactNode, useEffect } from "react"

interface User {
  id: number;
  role?: string;
  email: string;
  name: string;
  surname?: string;
  phone?: string;
  gender?: number;
}

interface AuthContextType {
    user?: User;
    setUser: (user?: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) =>{
    const [user,setUser] = useState<User | undefined>(undefined);
   
    useEffect(()=>{
        const storedUser = localStorage.getItem("user");
        

        if (storedUser) setUser(JSON.parse(storedUser))

    }, []);

    const logout = () => {
        setUser(undefined)
       
        localStorage.removeItem("user");
        
    }
    return (
        <AuthContext.Provider value={{user,setUser,logout}} >{children}</AuthContext.Provider>
    );
 };

 export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) throw new Error("useAuth must be  used within AuthProvider");
    return context;
 }