import React, { useEffect, useState } from 'react'

const useCount = (datas) => {
    const [ totalCount, setTotalCount ] = useState()
    const [ term, setTerm ] = useState('')

    useEffect(() => {
        if(true){
            countingData(datas, term)
        }
    }, [datas, term])

    const countingData = (datas, term) => {
        const data = datas.filter(item => item.status === term)
        setTotalCount(data)
    }

    return [totalCount, term]

}

export default useCount