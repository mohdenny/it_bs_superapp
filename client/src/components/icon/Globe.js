import React from 'react'
import { HiGlobeAlt, HiOutlineGlobeAlt } from 'react-icons/hi'

const Globe = ({ location, path }) => {
    const outline = (
        <HiOutlineGlobeAlt className='h-6 w-11'/>
    )

    const solid = (
        <HiGlobeAlt className='h-6 w-11'/>
    )
        
    return (
        <>
            {
                location === path ? solid : outline
            }
        </>
    )
}

export default Globe
