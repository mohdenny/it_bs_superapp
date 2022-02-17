import React, { useEffect, useState } from 'react'

const useCount = ({ test, test2 }) => {
    const [ totalCount, setTotalCount ] = useState()

    const countingData = ({ test, test2 }) => {
        // const data = values.filter(item => item.status === term)

        // setTotalCount(data.length)

        setTotalCount({test: test, test2: test2})

        // console.log(test)

        return null
    }

    return [totalCount, countingData]
}

export default useCount