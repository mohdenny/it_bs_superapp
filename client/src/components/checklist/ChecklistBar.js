import React, { Fragment } from 'react'
import MenuBarContainer from '../menu/MenuBarContainer'
import MenuBarControl from '../menu/MenuBarControl'
import ButtonControl from '../button/ButtonControl'
import { format } from 'date-fns'

const valuesButtonSecondary = [
    { name: '', control: 'primary', color: 'gray', colorType: 'dark', textColor: 'white', label: format(new Date(), 'eeee, MMMM MM, yyyy'), canClicked: 'false' },
    { name: '', control: 'secondary', label: 'All', canClicked: 'true' },
    { name: 'three', control: 'secondary', label: '03:00', canClicked: 'true' },
    { name: 'seven', control: 'secondary', label: '07:00', canClicked: 'true' },
    { name: 'eleven', control: 'secondary', label: '11:00', canClicked: 'true' },
    { name: 'fourteen', control: 'secondary', label: '14:00', canClicked: 'true' },
    { name: 'nineteen', control: 'secondary', label: '19:00', canClicked: 'true' },
    { name: 'twentytwo', control: 'secondary', label: '22:00', canClicked: 'true' }
]

const ChecklistBar = ({
    checklists,
    handleCallModal,
    checkingAlreadyFilled,
    ...rest
}) => {
    return (
        <MenuBarContainer>
            <MenuBarControl control={'first-line'}>
                {
                    valuesButtonSecondary.map(item => {
                        return (
                            <Fragment key={item.id}>
                                {
                                    checkingAlreadyFilled(checklists, item.label) !== 0 ?
                                        <ButtonControl
                                            className={'border-green-300'}
                                            control={item.control}
                                            name={item.name}
                                            label={item.label}
                                            canClicked={item.canClicked}
                                            color={item.color}
                                            colorType={item.colorType}
                                            textColor={item.textColor}
                                            {...rest}
                                        />
                                    :
                                        <ButtonControl
                                            control={item.control}
                                            name={item.name}
                                            label={item.label}
                                            canClicked={item.canClicked}
                                            color={item.color}
                                            colorType={item.colorType}
                                            textColor={item.textColor}
                                            {...rest}
                                        />
                                }
                            </Fragment>
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
                    colorType= 'light'
                    textColor='white'
                    onClick={() => handleCallModal('modal-create-form')}
                />
            </MenuBarControl>
        </MenuBarContainer>
    )
}

export default ChecklistBar