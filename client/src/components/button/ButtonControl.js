import React from 'react'
import ButtonGeneral from './ButtonGeneral'
import ButtonSidebar from './ButtonSidebar'

const ButtonControl = ({ control, ...rest }) => {
    switch(control){
        case 'sidebar':
            return <ButtonSidebar {...rest}/>
        case 'general':
            return <ButtonGeneral {...rest}/>
        default:
            return null
    }
}

export default ButtonControl
