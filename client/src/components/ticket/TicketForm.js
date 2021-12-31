import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import classnames from 'classnames'
import FormContainer from '../form/FormContainer'
import FormControl from '../form/FormControl'

const TicketForm = () => {
    const departmentOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]

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

    const priorityOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]

    const initialValues = {
        department: '',
        subject: '',
        problem: '',
        onduty: '',
        priority: '',
        status: ''
    }

    const validationSchema = Yup.object({
        department: Yup.string().required('Required'),
        subject: Yup.string().max(40, 'Must be exactly 40 characters').required('Required'),
        problem: Yup.string().required('Required'),
        onduty: Yup.string().required('Required'),
        priority: Yup.string().required('Required'),
        status: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }

    return (
        <FormContainer>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik => {
                        return (
                            <Form>
                                <FormControl
                                    control={'select'}
                                    label={'Department'}
                                    name={'department'}
                                    options={departmentOptions}
                                />
                                <FormControl
                                    control={'input'}
                                    label={'Subject'}
                                    name={'subject'}
                                />
                                <FormControl
                                    control={'textarea'}
                                    label={'Problem'}
                                    name={'problem'}
                                />
                                <div className='flex flex-row w-full justify-between'>
                                    <FormControl
                                        control={'select'}
                                        label={'Onduty'}
                                        name={'onduty'}
                                        options={ondutyOptions}
                                    />
                                    <FormControl
                                        control={'select'}
                                        label={'Priority'}
                                        name={'priority'}
                                        options={priorityOptions}
                                    />
                                    <FormControl
                                        control={'select'}
                                        label={'Status'}
                                        name={'status'}
                                        options={statusOptions}
                                    />
                                </div>
                                <div className='flex justify-end mb-4'>
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
        </FormContainer>
    )
}

export default TicketForm