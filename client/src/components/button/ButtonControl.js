import React from 'react'
import ButtonSecondary from './ButtonSecondary'
import ButtonSidebar from './ButtonSidebar'
import ButtonPrimary from './ButtonPrimary'

const ButtonControl = ({ control, ...rest }) => {
    switch(control){
        case 'sidebar':
            return <ButtonSidebar {...rest}/>
        case 'secondary':
            return <ButtonSecondary {...rest}/>
        case 'primary':
            return <ButtonPrimary {...rest}/>
        default:
            return null
    }
}

export default ButtonControl
