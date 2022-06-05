import React, { useEffect, useState } from 'react'
import { HiSearch, HiPencilAlt, HiTrash, HiDocumentAdd } from 'react-icons/hi'
import classnames from 'classnames'

const ButtonRegular = ({ label, onClick, icon, color, colorType, textColor, children }) => {

    const [colorClass, setColorClass] = useState('')
    const [colorHoverClass, setColorHoverClass] = useState('')

    useEffect(() => {

        switch(colorType){
            case 'light':
                setColorClass(`bg-${color}-500`)
                setColorHoverClass(`bg-${color}-600`)
                break
            case 'dark':
                setColorClass(`bg-${color}-900`)
                setColorHoverClass(`bg-${color}-800`)
                break
            default:
                return null
        }

    }, [colorType, color])

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
            className={classnames(`${colorClass} h-11 text-${textColor} py-1 flex flex-row items-center justify-center border-2 rounded-xl hover:${colorHoverClass}`, {
                'pl-1 pr-4' : label && icon 
            }, {
                'px-4' : !icon 
            })} 
            onClick={onClick}
        >
            { icon && renderedIcon() }
            { children || label} 
        </button>
    )
}

export default ButtonRegular
