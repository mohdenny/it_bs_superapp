import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import classnames from 'classnames'
import FormContainer from '../form/FormContainer'
import FormControl from '../form/FormControl'

const ondutyOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
]

const statusOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
]

const initialValues = {
    onduty: '',
    note: '',
    status: ''
}

const TicketEditForm = ({ ticketById }) => {
    const validationSchema = Yup.object({
        onduty: Yup.string().required('Required'),
        note: Yup.string().required('Required'),
        status: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }

    return (
        <FormContainer>
            <div className='flex flex-col space-y-4'>
                {
                    ticketById.map(item => {
                        return (
                            <div key={item.id} className='divide-y-reverse divide-y-2 divide-gray-200'>
                                <div className='flex flex-row w-full'>
                                    <p className='w-full'>Ticket ID:</p>
                                    <p className='w-full font-semibold'>{item.id}</p>
                                </div>
                                <div className='flex flex-row w-full'>
                                    <p className='w-full'>Subject:</p>
                                    <p className='w-full font-semibold'>{item.subject}</p>
                                </div>
                            </div>
                        )
                    })
                }
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {
                        formik => {
                            return(
                                <Form>
                                    <FormControl
                                        control={'select'}
                                        label={'Onduty'}
                                        name={'onduty'}
                                        options={ondutyOptions}
                                    />
                                    <FormControl
                                        control={'select'}
                                        label={'Status'}
                                        name={'status'}
                                        options={statusOptions}
                                    />
                                    <FormControl
                                        control='textarea'
                                        label='Note'
                                        name='note'
                                    />
                                    <div className='flex justify-end mb-2'>
                                        <button 
                                            className={classnames('bg-blue-400 py-1 px-4 rounded-xl text-white hover:bg-blue-500',
                                            { 'bg-yellow-300 hover:bg-yellow-300' : !formik.isValid || formik.isSubmitting },
                                            )} 
                                            type='submit'
                                            disabled={!formik.isValid || formik.isSubmitting}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            )
                        }
                    }
                </Formik>
            </div>
        </FormContainer>
    )
}

export default TicketEditForm