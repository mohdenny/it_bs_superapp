import React from 'react'
import { HiHome, HiOutlineHome } from 'react-icons/hi'

const Home = ({ location, path }) => {

    const outline = (
        <HiOutlineHome className='h-6 w-11'/>
    )

    const solid = (
        <HiHome className='h-6 w-11'/>
    )

    return (
        <>
            {
                location === path ? solid : outline
            }
        </>
    )
}

export default Home
