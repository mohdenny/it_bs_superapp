import React from 'react'
import MenuBarContainer from '../menu/MenuBarContainer'
import MenuBarControl from '../menu/MenuBarControl'
import ButtonControl from '../button/ButtonControl'
import { format } from 'date-fns'

const valuesButtonSecondary = [
    { name: 'day', control: 'primary', label: format(new Date(), 'eeee, MMMM MM, yyyy'), canClicked: 'false' },
    { name: 'three', control: 'secondary', label: '03:00', canClicked: 'true' },
    { name: 'seven', control: 'secondary', label: '07:00', canClicked: 'true' },
    { name: 'eleven', control: 'secondary', label: '11:00', canClicked: 'true' },
    { name: 'fourteen', control: 'secondary', label: '14:00', canClicked: 'true' },
    { name: 'nineteen', control: 'secondary', label: '19:00', canClicked: 'true' },
    { name: 'twentytwo', control: 'secondary', label: '22:00', canClicked: 'true' }
]

const ChecklistBar = ({
    handleCallModal,
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
                                canClicked={item.canClicked}
                                {...rest}
                            >
                                {' '}
                                { 
                                    
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

export default ChecklistBar