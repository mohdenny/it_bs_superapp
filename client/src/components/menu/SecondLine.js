import React from "react"

const SecondLine = ({ children }) => {
    return (
        <div className='flex flex-col items-center justify-center space-y-4 bg-white h-auto w-full '>
            <div className='flex flex-row items-center justify-center h-auto space-x-4 w-full'>
                {children}
            </div>
        </div>
    )
}

export default SecondLine