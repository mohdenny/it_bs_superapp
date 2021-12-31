import React from 'react'

const FormContainer = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-between h-full w-full py-2 space-y-2 px-4">
            <div className="h-full w-full">
                {children}
            </div>
        </div>
    )
}

export default FormContainer