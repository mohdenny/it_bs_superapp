import React from 'react'
import MenuBarContainer from '../menu/MenuBarContainer'
import MenuBarControl from '../menu/MenuBarControl'
import ButtonControl from '../button/ButtonControl'
import BadgeControl from '../badge/BadgeControl'

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
    tickets,
    handleCallModal,
    countTicketByStatus, 
    ticketToCount,
    ...rest 
}) => {

    return (
        <MenuBarContainer>
            <MenuBarControl control={'first-line'}>
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
                                {' '}
                                { 
                                    countTicketByStatus(ticketToCount, item.name) !== 0 && 
                                        <sup><BadgeControl control='ticket' color={item.name}>{countTicketByStatus(ticketToCount, item.name)}</BadgeControl></sup> 
                                }
                            </ButtonControl>
                        )
                    })
                }
            </MenuBarControl>
            <MenuBarControl control={'second-line'}>
                <ButtonControl
                    control='primary'
                    label='Create New'
                    icon='add'
                    color='blue'
                    textColor='white'
                    onClick={() => handleCallModal('modal-create-form')}
                />
            </MenuBarControl>
        </MenuBarContainer>
    )
}

export default TicketBar