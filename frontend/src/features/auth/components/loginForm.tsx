import React from "react";
import Button from "./button";
interface LoginFormProbs{
    className? : string,
}
const LoginForm: React.FC<LoginFormProbs> = ({className}) => {
    return(
        <form className="grid grid-cols-1 gap-4 p-6 max-w-xl mx-auto">
            <input
            type="email" required placeholder="Email" name="email" className="w-full border border-gray-400 border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" required placeholder="Şifre" name="password" className="w-full border border-gray-400 border-2 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <Button type="submit" label="Giriş yap"/>
        </form>
    )
}
export default LoginForm;