import React from 'react'
import LabelText from './LabelText'

const LabelControl = ({ control, ...rest }) => {
    switch(control){
        case 'label':
            return <LabelText {...rest}/>
        default:
            return null
    }
}

export default LabelControl