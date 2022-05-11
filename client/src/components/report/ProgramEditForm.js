import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import classnames from 'classnames'
import FormContainer from '../form/FormContainer'
import FormControl from '../form/FormControl'
import LabelControl from '../form/label/LabelControl'

const programOptions = [
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

const initialValues = {
    program: '',
    onduty: '',
    onair: '',
    dalet: '',
    pd: '',
    description: ''
}

const ProgramEditForm = ({ programById }) => {
    const validationSchema = Yup.object({
        program: Yup.string().required('Required'),
        onduty: Yup.string().required('Required'),
        onair: Yup.string().required('Required'),
        dalet: Yup.string().required('Required'),
        pd: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }

    return (
        <FormContainer>
            <div className='flex flex-col space-y-4'>
                {
                    programById.map((item, index) => {
                        return (
                            <LabelControl 
                                key={index}
                                control='label'
                                text='Program:'
                            >
                                {item.program}
                            </LabelControl>
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
                                        label={'Program'}
                                        name={'program'}
                                        options={programOptions}
                                    />
                                    <FormControl
                                        control={'select'}
                                        label={'Onduty'}
                                        name={'onduty'}
                                        options={ondutyOptions}
                                    />
                                    <FormControl
                                        control={'textarea'}
                                        label={'Onair'}
                                        name={'onair'}
                                    />
                                    <FormControl
                                        control={'textarea'}
                                        label={'Dalet'}
                                        name={'dalet'}
                                    />
                                    <FormControl
                                        control={'input'}
                                        label={'PD'}
                                        name={'pd'}
                                    />
                                    <FormControl
                                        control={'textarea'}
                                        label={'Description'}
                                        name={'description'}
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

export default ProgramEditForm