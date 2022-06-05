import React from 'react'
import classnames from 'classnames'

const ButtonSecondary = ({ 
    name, 
    label, 
    isActive, 
    setIsActive, 
    isActiveOthers = '', 
    setIsActiveOthers = '', 
    canClicked = false,
    onClick, 
    disabled,
    className = ''
}) => {
    
    const canClickedButton = (
        <button 
            className={classnames(`${className} bg-white h-11 px-4 py-1 border-2 rounded-xl hover:bg-gray-100`, {
                'bg-gray-900 border-gray-600 text-white shadow-md hover:bg-gray-800' : isActive === name || isActiveOthers === name
            })} 
            onClick={() => setIsActive(name) || setIsActiveOthers(name)}
        >
            {label}
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
