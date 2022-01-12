import React from 'react'
import Home from './Home'

const Icon = ({ icon, ...rest }) => {

    switch(icon){
        case 'home':
            return <Home {...rest}/>
        default:
            return null
    }
}

export default Icon
