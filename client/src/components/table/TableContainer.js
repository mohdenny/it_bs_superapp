import React from 'react'

const TableContainer = ({ children }) => {
    return (
        <div className="flex flex-col">
            <div className="-my-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden border border-gray-200 py-4 px-4 bg-white sm:rounded-lg">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableContainer