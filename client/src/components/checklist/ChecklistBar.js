import React, { Fragment, useEffect, useState } from 'react'
import MenuBarContainer from '../menu/MenuBarContainer'
import MenuBarControl from '../menu/MenuBarControl'
import ButtonControl from '../button/ButtonControl'
import { format } from 'date-fns'

const valuesButtonFirstLine = [
    { name: 'today', control: 'secondary', label: format(new Date(), 'eeee, MMMM MM, yyyy'), value: format(new Date(), 'dd-MM-yyyy') , canClicked: 'true', filter: 'true' },
    { name: 'alltime', value: '', control: 'secondary', label: 'All the Time', canClicked: 'true',}
]

const valuesButtonSecondaLine = [
    { name: 'all-time', control: 'secondary', label: 'All', value: 'all-time', canClicked: 'true' },
    { name: 'three', control: 'secondary', label: '03:00', value: '03:00', canClicked: 'true' },
    { name: 'seven', control: 'secondary', label: '07:00', value: '07:00', canClicked: 'true' },
    { name: 'eleven', control: 'secondary', label: '11:00', value: '11:00', canClicked: 'true' },
    { name: 'fourteen', control: 'secondary', label: '14:00', value: '14:00', canClicked: 'true' },
    { name: 'nineteen', control: 'secondary', label: '19:00', value: '19:00', canClicked: 'true' },
    { name: 'twentytwo', control: 'secondary', label: '22:00', value: '22:00', canClicked: 'true' }
]

const ChecklistBar = ({
    handleCallModal,
    checkingAlreadyFilled,
    checklists,
    ...rest
}) => {

    const [isViewFilter, setIsViewFilter] = useState();

    useEffect(() => {
        console.log(isViewFilter)
    })

    return (
        <MenuBarContainer>
            <MenuBarControl control={'first-line'}>
                {
                    valuesButtonFirstLine.map((item, index) => {
                        return (
                            <ButtonControl
                                key={index}
                                control={item.control}
                                name={item.value}
                                label={item.label}
                                canClicked={item.canClicked}
                                
                                onClick={() => setIsViewFilter(!isViewFilter)}
                                {...rest}
                            />
                        )
                    })
                }
            </MenuBarControl>
            {   
                !isViewFilter &&
                    <MenuBarControl control={'first-line'}>
                        {
                            valuesButtonSecondaLine.map((item, index) => {
                                return (
                                    <Fragment key={index}>
                                        {
                                            checkingAlreadyFilled(checklists, item.label) !== 0 ?
                                                <ButtonControl
                                                    className={'border-green-300'}
                                                    control={item.control}
                                                    name={item.value}
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
                }
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