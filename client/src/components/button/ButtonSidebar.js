import React from 'react'
import IconControl from '../icon/IconControl'
import ButtonLinkSidebar from './ButtonLinkSidebar'

const ButtonSidebar = ({ location, ...rest }) => {

    return (
        <ButtonLinkSidebar location={location} {...rest}>
            <IconControl location={location} {...rest}/>
        </ButtonLinkSidebar>
    )
}

export default ButtonSidebar
