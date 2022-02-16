import React from 'react'
import ButtonControl from '../button/ButtonControl'

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

const TicketBar = ({ handleCallModal, ...rest }) => {
    return (
        <div className='flex flex-col items-center justify-center py-6 space-y-4 bg-white h-auto w-full '>
            <div className='flex items-center justify-center h-auto w-full'>
                <ButtonControl
                    control='primary'
                    label='Create New'
                    icon='search'
                    color='blue'
                    textColor='white'
                    onClick={() => handleCallModal('modal-create-form')}
                />
            </div>
            <div className='flex flex-row items-center justify-center h-auto space-x-4 w-full'>
                {
                    valuesButtonGeneral.map((item, index) => {
                        return (
                            <ButtonControl
                                key={index}
                                control={item.control}
                                name={item.name}
                                label={item.label}
                                {...rest}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TicketBar