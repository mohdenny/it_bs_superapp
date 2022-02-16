import React, { useEffect, useState } from 'react'

const useCount = (test) => {
    const [ totalCount, setTotalCount ] = useState()

    useEffect(() => {
        countingData(test)
    }, [])

    const countingData = (test) => {
        // const data = values.filter(item => item.status === term)

        // setTotalCount(data.length)

        setTotalCount(test)

        // console.log(test)

        return null
    }

    return [totalCount, countingData]
}

export default useCount