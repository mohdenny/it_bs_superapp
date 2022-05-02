import React from 'react'
import MenuBarContainer from '../menu/MenuBarContainer'
import MenuBarControl from '../menu/MenuBarControl'
import ButtonControl from '../button/ButtonControl'

const valuesButtonSecondary = [
    { name: 'program', control: 'secondary', label: 'Program' },
    { name: 'live-report', control: 'secondary', label: 'Live' },
]

const ReportBar = ({  handleCallModal, ...rest }) => {
    
    return (
        <MenuBarContainer>
            <MenuBarControl control={'first-line'}>
                <ButtonControl
                    control='primary'
                    label='Create New'
                    icon='add'
                    color='blue'
                    textColor='white'
                    onClick={() => handleCallModal('modal-create-form')}
                />
            </MenuBarControl>
            <MenuBarControl control={'second-line'}>
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
                            />
                        )
                    })
                }
            </MenuBarControl>
        </MenuBarContainer>
    )
}

export default ReportBar