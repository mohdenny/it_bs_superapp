import React from 'react'

const LabelControl = ({ control, children }) => {
    switch(control){
        case 'label':
            return <LabelText {...rest}/>
        default:
            return null
}

export default LabelControl