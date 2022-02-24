import React, { useEffect, useState } from 'react'

const useCount = (datas) => {
    const [ totalCount, setTotalCount ] = useState()
    const [ term, setTerm ] = useState('')

    useEffect(() => {
        if(true){
            setTotalCount(1)
            // console.log(datas.length !== 0, 'ok')
        }
    }, [datas, term])

    const countingData = (datas, term) => {
        const data = datas.filter(item => item.status === 'pending')
        // setTotalCount(1)

        return data

        // console.log(datas.length !== 0, term !== null)
    }

    return [totalCount, setTerm]
}

export default useCount