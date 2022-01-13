import React, { Fragment } from 'react'
import moment from 'moment'
import TicketHistory from './TicketHistory'

const TicketDetail = ({ ticketById }) => {
    const renderedDetail = ticketById.map(item => {
        return (
            <Fragment key={item.id}>
                <div className='flex flex-row w-full'>
                    <p className='w-full'>Ticket Created By:</p>
                    <p className='w-full font-medium'>{item.name}</p>
                </div>
                <div className='flex flex-row w-full'>
                    <p className='w-full'>Ticket Created Date:</p>
                    <p className='w-full font-medium'>
                        {moment(item.date).format('D-M-YYYY, H:mm')}
                    </p>
                </div>
                <div className='flex flex-row w-full'>
                    <p className='w-full'>Ticket ID:</p>
                    <p className='w-full font-medium'>{item.id}</p>
                </div>
                <div className='flex flex-row w-full'>
                    <p className='w-full'>Subject:</p>
                    <p className='w-full font-medium'>{item.subject}</p>
                </div>
                <div className='flex flex-row w-full'>
                    <p className='w-full'>User Department:</p>
                    <p className='w-full font-medium'>{item.department}</p>
                </div>
                <div className='flex flex-row w-full'>
                    <p className='w-full'>Problem:</p>
                    <p className='w-full font-medium'>{item.problem}</p>
                </div>
                <div className='flex flex-row w-full'>
                    <p className='w-full'>Solution:</p>
                    <p className='w-full font-medium'>{item.solution}</p>
                </div>
                <div className='flex flex-row w-full'>
                    <p className='w-full'>Onduty:</p>
                    <div className='flex font-medium flex-col w-full'>
                        { 
                            item.onduty.map((onduty, index) => {
                                return <p key={index} className='w-full'>{onduty}</p>
                            }) 
                        }
                    </div>
                </div>
                <div className='flex flex-row w-full'>
                    <p className='w-full'>Last Status:</p>
                    <p className='w-full font-medium'>{item.status}</p>
                </div>
                <div className='flex flex-row w-full'>
                    <p className='w-full'>Priority:</p>
                    <p className='w-full font-medium'>{item.priority}</p>
                </div>
                <div className='flex w-full'>
                    <p className='w-full'>History:</p>
                </div>
                { <TicketHistory ticket={item.history}/> }
            </Fragment>
        )
    })

    return (   
        <div className='flex flex-col items-center justify-between h-full w-full py-2 space-y-2 px-4'>
            {renderedDetail}
        </div>
    )
}

export default TicketDetail