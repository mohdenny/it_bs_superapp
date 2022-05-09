import React from 'react'

const LabelText = ({ text, lineBreak = false, children }) => {

    return (
        <>
            <div className='flex flex-row w-full'>
                <p className='w-full'>{text}</p>
                { lineBreak === false && <div className='w-full font-semibold'>{children}</div> }
            </div>
            { lineBreak && <div className='w-full font-semibold'>{children}</div> }
        </>
    )
}

export default LabelText