import React from 'react'
import classnames from 'classnames'

const ButtonSecondary = ({ 
    name, 
    label, 
    isActive, 
    setIsActive, 
    canClicked,
    onClick, 
    disabled,
    children
}) => {
    
    const canClickedButton = (
        <button 
            className={classnames('bg-white h-11 text-gray-800 px-4 py-1 border-2 rounded-xl hover:bg-gray-100', {
                'bg-gray-100 border-gray-200 text-gray-900 font-bold shadow-md' : isActive === name
            })} 
            onClick={() => setIsActive(name)}
        >
            {label} 
            {children}
        </button>
    )

    const regularButton = (
        <button 
            className={classnames('bg-white h-11 px-4 py-1 border-2 rounded-xl hover:bg-gray-100', {
                'bg-gray-200 border-0 text-gray-400 hover:bg-gray-200 hover:text-gray-400' : disabled
            })}
            onClick={onClick}
            disabled={disabled}
        >
            {label} 
        </button>
    )

    return (
        canClicked ? canClickedButton : regularButton
    )
}

export default ButtonSecondary
