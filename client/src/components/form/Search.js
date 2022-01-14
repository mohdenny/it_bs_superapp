import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

const Search = ({ name, ...rest }) => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="border-l-4 border-t-2 border-b-2 py-1 border-gray-300 rounded-l-xl px-2 h-full w-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <Field 
                className='border-2 border-gray-300 h-8 rounded-r-xl'
                id={name} 
                name={name}
                {...rest} 
            />
            <ErrorMessage component={TextError} name={name} />
        </>
    )
}

export default Search
