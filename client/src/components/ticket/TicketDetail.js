import React, { Fragment } from 'react'
import moment from 'moment'
import TicketHistory from './TicketHistory'
import LabelControl from '../form/label/LabelControl'

const valuesLabel = [
    { control: 'label', text: 'Ticket Created By:' ,values: (item) => item.name },
    { control: 'label', text: 'Ticket Created Date:' ,values: (item) => moment(item.date).format('D-M-YYYY, H:mm') },
    { control: 'label', text: 'Ticket ID:' ,values: (item) => item.id },
    { control: 'label', text: 'Subject:' ,values: (item) => item.subject },
    { control: 'label', text: 'User Department:' ,values: (item) => item.department },
    { control: 'label', text: 'Problem:' ,values: (item) => item.problem },
    { control: 'label', text: 'Solution:' ,values: (item) => item.solution },
    { control: 'label', text: 'Onduty:' ,values: (item) => item.onduty.map((onduty, index) => {
                                                                return <p key={index} className='w-full'>{onduty}</p>
                                                            })  },
    { control: 'label', text: 'Last Status:' ,values: (item) => item.status },                                                        
    { control: 'label', text: 'Priority:' ,values: (item) => item.priority },                                                        
    { control: 'label', text: 'History:', lineBreak: true ,values: (item) => <div className='flex font-semibold flex-col w-full'>
                                                                <TicketHistory ticket={item.history}/> 
                                                            </div> },                                                        
]

const TicketDetail = ({ ticketById }) => {

    const renderedDetail = ticketById.map(item => {
        return (
            <Fragment key={item.id}>
                {
                    valuesLabel.map((value, index) => {
                        return (
                            <LabelControl
                                key={index}
                                control={value.control}
                                text={value.text}
                                lineBreak={value.lineBreak}
                            >
                                {value.values(item)}
                            </LabelControl>
                        )
                    })
                }
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