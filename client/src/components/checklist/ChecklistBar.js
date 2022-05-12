import React from 'react'
import MenuBarContainer from '../menu/MenuBarContainer'
import MenuBarControl from '../menu/MenuBarControl'
import ButtonControl from '../button/ButtonControl'

const ChecklistBar = ({
    handleCallModal,
}) => {
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
        </MenuBarContainer>
    )
}

export default ChecklistBar