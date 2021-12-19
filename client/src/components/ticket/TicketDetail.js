import React from 'react'
import moment from 'moment'
import TicketHistory from './TicketHistory'

const TicketDetail = ({ data }) => {
    const datas = data.dataTicket

    return (
        <div className='flex flex-col items-center justify-between h-full w-full py-2 space-y-2 px-4'>
            <div className='flex flex-row w-full'>
                <p className='w-full'>Ticket Created By:</p>
                <p className='w-full font-medium'>{datas.name}</p>
            </div>
            <div className='flex flex-row w-full'>
                <p className='w-full'>Ticket Created Date:</p>
                <p className='w-full font-medium'>{moment(datas.date).format('D-M-YYYY, H:mm')}</p>
            </div>
            <div className='flex flex-row w-full'>
                <p className='w-full'>Ticket ID:</p>
                <p className='w-full font-medium'>{datas.id}</p>
            </div>
            <div className='flex flex-row w-full'>
                <p className='w-full'>Subject:</p>
                <p className='w-full font-medium'>{datas.subject}</p>
            </div>
            <div className='flex flex-row w-full'>
                <p className='w-full'>User Department:</p>
                <p className='w-full font-medium'>{datas.department}</p>
            </div>
            <div className='flex flex-row w-full'>
                <p className='w-full'>Problem:</p>
                <p className='w-full font-medium'>{datas.problem}</p>
            </div>
            <div className='flex flex-row w-full'>
                <p className='w-full'>Solution:</p>
                <p className='w-full font-medium'>{datas.solution}</p>
            </div>
            <div className='flex flex-row w-full'>
                <p className='w-full'>Onduty:</p>
                <div className='flex font-medium flex-col w-full'>
                    { 
                        datas.onduty.map((item, index) => {
                            return <p key={index} className='w-full'>{item}</p>
                        }) 
                    }
                </div>
            </div>
            <div className='flex flex-row w-full'>
                <p className='w-full'>Status:</p>
                <p className='w-full font-medium'>{datas.status}</p>
            </div>
            <div className='flex flex-row w-full'>
                <p className='w-full'>Priority:</p>
                <p className='w-full font-medium'>{datas.priority}</p>
            </div>
            <TicketHistory data={data}/>
        </div>
    )
}

export default TicketDetail