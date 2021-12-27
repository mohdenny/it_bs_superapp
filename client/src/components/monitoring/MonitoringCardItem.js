import React from 'react'
import classnames from 'classnames'

const CardItem = ({ data }) => {

    const convertByte = (data) => {
        const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        let l = 0 
        let n = parseInt(data, 10) || 0

        while(n >=1024 && ++l){
            n = n/1024
        }

        return(n.toFixed(n < 10 && l > 0 ? 1: 0) + ' ' + units[l])
    }

    return (
        <div className='flex flex-row justify-center px-4 py-2 border-2 rounded-b-xl space-x-6'>
            <div className='flex flex-row space-x-2'>
                <div>    
                    <p>Size:</p>
                    <p>Used:</p>
                    <p>Free:</p>
                </div>
                <div>   
                    <p>{convertByte(data.size)}</p>   
                    <p>{convertByte(data.used)}</p>
                    <p>{convertByte(data.available)}</p>
                </div>
            </div>
            <div className='transform -translate-y-11 flex border-2 overflow-hidden w-20 h-auto rounded-full'>     
                <div className='z-30 px-2 flex items-center h-full w-full justify-center'>
                    <p className={classnames('font-bold', { 'text-white' : Math.floor(parseInt(data.use)) >= parseInt('60%') })} >{`${Math.floor(data.use)}%`}</p>
                </div>
                <div className={classnames('absolute z-20 bg-white w-full',
                    { 'h-100%' : Math.floor(parseInt(data.use)) >= parseInt('0%') && Math.floor(parseInt(data.use)) <= parseInt('0%') },
                    { 'h-90%' : Math.floor(parseInt(data.use)) >= parseInt('0%') && Math.floor(parseInt(data.use)) <= parseInt('10%') },
                    { 'h-80%' : Math.floor(parseInt(data.use)) >= parseInt('10%') && Math.floor(parseInt(data.use)) <= parseInt('20%') },
                    { 'h-70%' : Math.floor(parseInt(data.use)) >= parseInt('20%') && Math.floor(parseInt(data.use)) <= parseInt('30%') },
                    { 'h-60%' : Math.floor(parseInt(data.use)) >= parseInt('30%') && Math.floor(parseInt(data.use)) <= parseInt('40%') },
                    { 'h-50%' : Math.floor(parseInt(data.use)) >= parseInt('40%') && Math.floor(parseInt(data.use)) <= parseInt('50%') },
                    { 'h-40%' : Math.floor(parseInt(data.use)) >= parseInt('50%') && Math.floor(parseInt(data.use)) <= parseInt('60%') },
                    { 'h-30%' : Math.floor(parseInt(data.use)) >= parseInt('60%') && Math.floor(parseInt(data.use)) <= parseInt('70%') },
                    { 'h-20%' : Math.floor(parseInt(data.use)) >= parseInt('70%') && Math.floor(parseInt(data.use)) <= parseInt('80%') },
                    { 'h-10%' : Math.floor(parseInt(data.use)) >= parseInt('80%') && Math.floor(parseInt(data.use)) <= parseInt('90%') },
                    { 'h-0%' : Math.floor(parseInt(data.use)) >= parseInt('90%') && Math.floor(parseInt(data.use)) <= parseInt('99%') },
                    { 'h-0%' : Math.floor(parseInt(data.use)) >= parseInt('99%') && Math.floor(parseInt(data.use)) <= parseInt('100%') },
                    )}
                ></div>
                <div className={classnames('absolute z-10 h-full w-full', 
                    { 'bg-red-500' : Math.floor(parseInt(data.use)) >= parseInt('79%') && Math.floor(parseInt(data.use)) <= parseInt('100%') },
                    { 'bg-blue-500' : Math.floor(parseInt(data.use)) >= parseInt('0%') && Math.floor(parseInt(data.use)) <= parseInt('79%') },
                )}></div>  
            </div>
        </div>
    )
}

export default CardItem