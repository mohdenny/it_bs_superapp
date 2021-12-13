import React from 'react'

const Card = ({ data, children }) => {
    return (
        <div className='bg-white rounded-xl w-auto'>
            <div className='px-4 py-2 border-2 rounded-t-xl'>
                <p className='font-bold uppercase'>{data.label}</p>
                <p className='text-xs uppercase'>{data.ip}</p>
            </div>
            {children}
        </div>
)
}

export default Card