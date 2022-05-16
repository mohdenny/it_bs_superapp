import React from 'react'
import { HiSearch, HiPencilAlt, HiTrash, HiDocumentAdd } from 'react-icons/hi'
import classnames from 'classnames'

const ButtonRegular = ({ label, onClick, icon, color, textColor }) => {

    const renderedIcon = () => {
        switch(icon){
            case 'search':
                return <HiSearch className='h-6 w-10'/>
            case 'add':
                return <HiDocumentAdd className='h-6 w-10'/>
            case 'pencil':
                return <HiPencilAlt className='h-6 w-10'/>
            case 'trash':
                return <HiTrash className='h-6 w-10'/>
            default:
                return null
        }
    }

    return (
        <button 
            className={classnames(`bg-${color}-500 h-11 text-${textColor} py-1 flex flex-row items-center justify-center border-2 rounded-xl hover:bg-${color}-600`, {
                'pl-1 pr-4' : label && icon 
            }, {
                'px-4' : !icon 
            })} 
            onClick={onClick}
        >
            { icon && renderedIcon() }
            {label} 
        </button>
    )
}

export default ButtonRegular
