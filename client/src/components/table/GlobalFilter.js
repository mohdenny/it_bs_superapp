import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormControl from '../form/FormControl'
import { useAsyncDebounce } from 'react-table'

const initialValues = {
    search: ''
}

export const GlobalFilter = ({ filter, setFilter }) => {
    const [value, setValue] = useState(filter)
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)

    const validationSchema = Yup.object({
        search: Yup.string()
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
        >
            <Form 
                className='flex flex-row h-full items-center justify-center'
            >
                <FormControl
                    control={'input'}
                    name={'search'}
                    placeholder={'Search...'}
                    value={value || ''}
                    onChange={e => {
                        setValue(e.target.value);
                        onChange(e.target.value);
                    }}
                />
            </Form>
        </Formik>
    )
}