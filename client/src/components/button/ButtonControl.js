import React from 'react'
import ButtonGeneral from './ButtonGeneral'
import ButtonSidebar from './ButtonSidebar'
import ButtonPrimary from './ButtonPrimary'

const ButtonControl = ({ control, ...rest }) => {
    switch(control){
        case 'sidebar':
            return <ButtonSidebar {...rest}/>
        case 'general':
            return <ButtonGeneral {...rest}/>
        case 'primary':
            return <ButtonPrimary {...rest}/>
        default:
            return null
    }
}

export default ButtonControl
