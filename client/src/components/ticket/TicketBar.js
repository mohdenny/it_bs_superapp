import React from 'react'
import ButtonControl from '../button/ButtonControl'

const valuesButtonSecondary = [
    { name: '', control: 'secondary', label: 'All' },
    { name: 'open', control: 'secondary', label: 'Open' },
    { name: 'in progress', control: 'secondary', label: 'In Progress' },
    { name: 'pending', control: 'secondary', label: 'Pending' },
    { name: 'on hold', control: 'secondary', label: 'On Hold' },
    { name: 'escalated', control: 'secondary', label: 'Escalated' },
    { name: 'solved', control: 'secondary', label: 'Solved' },
    { name: 'closed', control: 'secondary', label: 'Closed' }
]

const TicketBar = ({ 
    handleCallModal,
    countTicketByStatus, 
    totalCount, 
    setTerm, 
    ...rest 
}) => {

    return (
        <div className='flex flex-col items-center justify-center py-6 space-y-4 bg-white h-auto w-full '>
            <div className='flex items-center justify-center h-auto w-full'>
                <ButtonControl
                    control='regular'
                    label='Create New'
                    icon='search'
                    color='blue'
                    textColor='white'
                    onClick={() => handleCallModal('modal-create-form')}
                />
            </div>
            <div className='flex flex-row items-center justify-center h-auto space-x-4 w-full'>
                {
                    valuesButtonSecondary.map((item, index) => {
                        return (
                            <ButtonControl
                                key={index}
                                control={item.control}
                                name={item.name}
                                label={item.label}
                                canClicked={true}
                                {...rest}
                            >
                                {
                                    totalCount != false && setTerm(item.name) && <sup>{totalCount}</sup> 
                                }
                            </ButtonControl>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TicketBar