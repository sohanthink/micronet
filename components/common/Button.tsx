import React from 'react'


    interface ButtonProps {
        text: string,
        buttonStyles: string,
        hoverStyles: string,
    }

    const Button: React.FC<ButtonProps> = ({ text,buttonStyles,hoverStyles }) => {
        return (
            // <div className={`${styles} px-3 py-2`}>
            //     {text}
            // </div>
            <div className="group relative inline-block">
                <button className={`${buttonStyles} relative z-10 px-6 py-2 font-semibold text-base rounded-lg overflow-hidden transition-all duration-300 ease-out`}>
                    {text}
                </button>
                <div className={`${hoverStyles} absolute inset-0 z-0 rounded-lg transition-all duration-300 ease-out scale-0 group-hover:scale-100 group-hover:opacity-100`}></div>
            </div>
        )
    }

export default Button