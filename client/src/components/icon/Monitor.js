import React from 'react'
import { HiChartPie, HiOutlineChartPie } from 'react-icons/hi'

const Monitor = ({ location, path }) => {
    const outline = (
        <HiOutlineChartPie className='h-6 w-11'/>
    )

    const solid = (
        <HiChartPie className='h-6 w-11'/>
)

    return (
        <>
            {
                location === path ? solid : outline
            }
        </>
    )
}

export default Monitor
