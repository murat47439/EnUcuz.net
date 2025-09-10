import React from "react";

interface ButtonProbs{
    label: string;
    onClick?: ()=> void;
    type? : "button" | "submit";
    className?: string;
}
const Button: React.FC<ButtonProbs> = ({label, onClick, type = "button", className}) => {
    return (
        <button
        type ={type}
        onClick = {onClick}
        className = {'bg-blue-600 text-white px-4 py-2 border rounded-lg hover:bg-blue-700 transition ${className || ""}'}
    >
        {label}
    </button>
    );
};
export default Button;