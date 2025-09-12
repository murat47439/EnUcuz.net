import React from "react";

interface ButtonProbs extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
    variant?: 'primary' | 'secondary'
    className?: string
}

const Button=({children, variant = 'primary',className = '', ...rest}: ButtonProbs) =>{
    const baseClasses = 'w-full py-2 border rounded transition-colors duration-200'

    const variantClasses = variant === 'primary'
    ? 'bg-blue-600 text-white hover:bg-blue-700'
    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'

    return(
        <button className={ `${baseClasses} ${variantClasses} ${className}` } {...rest}> {children}</button>
    )
}
export default Button