import React, { useEffect, useState } from 'react'

const useCount = (datas) => {
    const [ totalCount, setTotalCount ] = useState()
    const [ term, setTerm ] = useState('')

    useEffect(() => {
        countingData( datas, term )
        console.log(term)
    }, [datas, term])

    const countingData = async (datas, term) => {
        const data = datas.filter(item => item.status === term)
        setTotalCount(data.length)
    }

    return [totalCount, setTerm]
}

export default useCount