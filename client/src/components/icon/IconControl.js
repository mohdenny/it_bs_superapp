import React from 'react'
import Home from './Home'
import Globe from './Globe'
import Ticket from './Ticket'
import Report from './Report'
import Monitor from './Monitor'
import Check from './Check'
import Inventory from './Inventory'
import Setting from './Setting'

const IconControl = ({ icon, ...rest }) => {
    switch(icon){
        case 'home':
            return <Home {...rest}/>
        case 'globe':
            return <Globe {...rest}/>
        case 'ticket':
            return <Ticket {...rest}/>
        case 'report':
            return <Report {...rest}/>
        case 'monitor':
            return <Monitor {...rest}/>
        case 'check':
            return <Check {...rest}/>
        case 'inventory':
            return <Inventory {...rest}/>
        case 'setting':
            return <Setting {...rest}/>
        default:
            return null
    }
}

export default IconControl
