import React, { useEffect, useState } from 'react'

const useCount = (datas) => {
    const [ totalCount, setTotalCount ] = useState()

    useEffect(() => {
        if(datas){
            // countingData(datas, term)
            const data = datas.filter(item => item.status === 'closed')
            setTotalCount(data)
            console.log(totalCount)
        }
    }, [datas])

    // const countingData = (datas, term) => {
    //     const data = datas.filter(item => item.status === term)
    //     setTotalCount(data)
    // }

    return [totalCount]

}

export default useCount