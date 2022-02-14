import React from 'react'
import ButtonControl from '../button/ButtonControl'
import { GlobalFilter } from '../table/GlobalFilter'

const valuesButtonGeneral = [
    { name: '', control: 'general', label: 'All' },
    { name: 'open', control: 'general', label: 'Open' },
    { name: 'in progress', control: 'general', label: 'In Progress' },
    { name: 'pending', control: 'general', label: 'Pending' },
    { name: 'on hold', control: 'general', label: 'On Hold' },
    { name: 'escalated', control: 'general', label: 'Escalated' },
    { name: 'solved', control: 'general', label: 'Solved' },
    { name: 'closed', control: 'general', label: 'Closed' }
]

const TicketBar = ({ 
    ticketToCount, 
    countTicketByStatus, 
    handleCallModal, 
    isActiveFilterStatus, 
    setIsActiveFilterStatus 
}) => {
    return (
        <div className='flex flex-col items-center justify-center py-4 bg-white h-auto w-full '>
            <div className='flex flex-row items-center justify-center h-auto space-x-4 w-full'>
                {
                    valuesButtonGeneral.map((item, index) => {
                        return (
                            <ButtonControl
                                key={index}
                                control={item.control}
                                name={item.name}
                                label={item.label}
                                isActiveFilterStatus={isActiveFilterStatus}
                                setIsActiveFilterStatus={setIsActiveFilterStatus}
                                countTicketByStatus={countTicketByStatus}
                                ticketToCount={ticketToCount}
                            />
                        )
                    })
                }
            </div>
            <div className='flex items-center justify-center h-auto space-x-4 w-full py-2'>
                <ButtonControl
                    control='primary'
                    label='Create New'
                    icon='search'
                    onClick={handleCallModal}
                />
            </div>
        </div>
    )
}

export default TicketBar