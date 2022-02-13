import React from 'react'
import { HiBadgeCheck, HiOutlineBadgeCheck } from 'react-icons/hi'

const Check = ({ location, path }) => {
    const outline = (
        <HiOutlineBadgeCheck className='h-6 w-11'/>
    )

    const solid = (
        <HiBadgeCheck className='h-6 w-11'/>
    )

    return (
        <>
            {
                location === path ? solid : outline
            }
        </>
    )
}

export default Check
