import React, { useEffect, useState } from 'react'

const useCount = ({ datas, term = '' }) => {
    const [ totalCount, setTotalCount ] = useState()

    useEffect(() => {
        if(datas){
            countingData(datas, term)
        }
    }, [datas, term])

    const countingData = (datas, term) => {
        // const data = datas.filter(item => item.status === term)
        // setTotalCount(term)
    }

    return [countingData, totalCount]

}

export default useCount