import React from 'react'
import StatusTicket from './StatusTicket'

const BadgeControl = ({ control, ...rest }) => {
    switch(control){
        case 'ticket':
            return <StatusTicket {...rest}/>
        default:
            return null
    }
}

export default BadgeControl