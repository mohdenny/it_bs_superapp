import React from 'react'
import Input from './Input'
import Textarea from './Textarea'
import Select from './Select'
import { GlobalFilter } from './GlobalFilter'

const FormControl = ({ control, ...rest }) => {
    switch(control){
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
            return <Textarea {...rest}/>
        case 'select':
            return <Select {...rest}/>
        case 'globalfilter':
            return <GlobalFilter {...rest}/>
        default:
            return null
    }
}

export default FormControl
