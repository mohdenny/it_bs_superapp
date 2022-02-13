import React from 'react'
import { HiCog, HiOutlineCog } from 'react-icons/hi'

const Setting = ({ location, path }) => {
    const outline = (
        <HiOutlineCog className='h-6 w-11'/>
    )
    const solid = (
        <HiCog className='h-6 w-11'/>
    )
    return (
        <>
            {
                location === path ? solid : outline
            }
        </>
    )
}

export default Setting