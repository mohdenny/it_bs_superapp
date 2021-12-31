import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const Input = (props) => {
    const { label, name, ...rest } = props

    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <Field 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                id={name} 
                name={name} 
                {...rest} 
            />
            <ErrorMessage component={TextError} name={name} />
        </div>
    )
}

export default Input