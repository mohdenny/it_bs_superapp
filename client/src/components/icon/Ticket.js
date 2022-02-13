import React from 'react'
import { HiTicket, HiOutlineTicket } from 'react-icons/hi'

const Ticket = ({ location, path }) => {
    const outline = (
        <HiOutlineTicket className='h-6 w-11'/>
    )

    const solid = (
        <HiTicket className='h-6 w-11'/>
    )

    return (
        <>
            {
                location === path ? solid : outline
            }
        </>
    )
}

export default Ticket
