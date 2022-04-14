import React, { useEffect, useState } from 'react'

const useCount = () => {
    const [ totalCount, setTotalCount ] = useState()

    // useEffect(() => {
    //     if(datas){
    //         countingData(datas, term)
    //     }
    // }, [datas, term])

    const countingData = (datas, term) => {
        const data = datas.filter(item => item.status === term)
        console.log(data, term)
    }

    return [totalCount, countingData]

}

export default useCount