import React from 'react'
import { HiSearch } from 'react-icons/hi'
// import classnames from 'classnames'

const ButtonPrimary = ({ label, onClick, icon }) => {
    const renderedIcon = () => {
        switch(icon){
            case 'search':
                return <HiSearch className='h-6 w-11'/>
            default:
                return null
        }
    }

    return (
        <button 
            className='bg-blue-600 h-11 text-white pl-1 pr-4 py-1 flex flex-row items-center justify-center border-2 rounded-xl hover:bg-blue-700' 
            onClick={() => onClick('modal-create-form')}
        >
            {renderedIcon()}
            {label} 
        </button>
    )
}

export default ButtonPrimary
