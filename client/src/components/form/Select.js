import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const Select = ({ label, name, options, ...rest }) => {
    return (
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>
                {label}
            </label>
            <div className="inline-block relative w-44">
                <Field 
                    as='select' 
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" 
                    id={name}
                    name={name}
                    {...rest}
                >
                    {
                        options.map((option, index) => {
                            return (
                                <option key={index} value={option.value}>
                                    {option.key}
                                </option>
                            )
                        })
                    }
                </Field>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
            <ErrorMessage component={TextError} name={name} />
        </div>
    )
}

export default Select