import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import ButtonSidebar from './ButtonSidebar'
import ButtonPrimary from './ButtonRegular'

const ButtonControl = ({ control, ...rest }) => {
    switch(control){
        case 'sidebar':
            return <ButtonSidebar {...rest}/>
        case 'general':
            return <ButtonSecondary {...rest}/>
        case 'primary':
            return <ButtonPrimary {...rest}/>
        default:
            return null
    }
}

export default ButtonControl
