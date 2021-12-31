import React from 'react'

const TextError = (props) => {
    return <p className='text-red-500 text-xs font-light ml-4'>{props.children}</p>
}

export default TextError