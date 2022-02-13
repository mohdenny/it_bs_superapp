import React from 'react'
import { HiCube, HiOutlineCube } from 'react-icons/hi'

const Inventory = ({ location, path }) => {
    const outline = (
        <HiOutlineCube className='h-6 w-11'/>
    )

    const solid = (
        <HiCube className='h-6 w-11'/>
    )

    return (
        <>
            {
                location === path ? solid : outline
            }
        </>
    )
}

export default Inventory
