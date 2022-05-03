import React from "react"

const MenuBarContainer = ({ children }) => {
    return (
        <div className='border border-gray-200 flex flex-col items-center justify-center py-6 space-y-4 sm:rounded-lg bg-white h-auto w-full '>
            {children}
        </div>
    )
}

export default MenuBarContainer