import React from 'react'
import { HiDocumentReport, HiOutlineDocumentReport } from 'react-icons/hi'

const Report = ({ location, path }) => {
    const outline = (
        <HiOutlineDocumentReport className='h-6 w-11'/>
    )
    
    const solid = (
        <HiDocumentReport className='h-6 w-11'/>
    )

    return (
        <>
            {
                location === path ? solid : outline
            }
        </>
    )
}

export default Report
