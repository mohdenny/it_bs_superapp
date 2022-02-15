import React from 'react'
import { HiSearch, HiPencilAlt, HiTrash } from 'react-icons/hi'
import classnames from 'classnames'

const ButtonRegular = ({ label, onClick, icon, color, textColor }) => {

    const renderedIcon = () => {
        switch(icon){
            case 'search':
                return <HiSearch className='h-6 w-11'/>
            case 'pencil':
                return <HiPencilAlt className='h-6 w-11'/>
            case 'trash':
                return <HiTrash className='h-6 w-11'/>
            default:
                return null
        }
    }

    return (
        <button 
            className={classnames(`bg-${color}-600 h-11 text-${textColor} py-1 flex flex-row items-center justify-center border-2 rounded-xl hover:bg-${color}-700`, {
                'pl-1 pr-4' : label
            })} 
            onClick={onClick}
        >
            {renderedIcon()}
            {label} 
        </button>
    )
}

export default ButtonRegular
