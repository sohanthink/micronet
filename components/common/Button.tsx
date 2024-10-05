import React from 'react'


    interface ButtonProps {
        text: string,
        styles: string,
    }

    const Button: React.FC<ButtonProps> = ({ text,styles }) => {
        return (
            <div className={`${styles} font-medium px-3 py-2 cursor-pointer transition-all duration-300 ease-out`}>
                {text}
            </div>
        )
    }

export default Button