import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const Input = ({ label, name, ...rest }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <Field 
                className="shadow appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-gray-500 focus:shadow-outline" 
                id={name} 
                name={name} 
                {...rest} 
            />
            <ErrorMessage component={TextError} name={name} />
        </div>
    )
}

export default Input