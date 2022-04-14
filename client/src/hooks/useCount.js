import React, { useEffect, useState } from 'react'

const useCount = ({ datas }) => {
    const [ totalCount, setTotalCount ] = useState()
    const [ term, setTerm ] = useState('')

    // useEffect(() => {
    //     if(datas){
    //         countingData(datas, term)
    //     }
    // }, [datas, term])

    // const countingData = async (datas, term) => {
    //     const data = datas.filter(item => item.status === term)
    // }

    // console.log(term)

    return [setTerm]

}

export default useCount