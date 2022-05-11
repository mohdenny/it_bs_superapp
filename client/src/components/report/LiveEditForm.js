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

const unitOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
]

const serverOptions = [
    { key: 'Select an option', value: '' },
    { key: 'Option 1', value: 'option1' },
    { key: 'Option 2', value: 'option2' },
    { key: 'Option 3', value: 'option3' }
]

const initialValues = {
    program: '',
    onduty: '',
    pukul: '',
    unit: '',
    server: '',
    modemup: '',
    lokasi: '',
    description: ''
}

const LiveEditForm = ({ liveById }) => {
    const validationSchema = Yup.object({
        program: Yup.string().required('Required'),
        onduty: Yup.string().required('Required'),
        pukul: Yup.string().required('Required'),
        unit: Yup.string().required('Required'),
        server: Yup.string().required('Required'),
        modemup: Yup.string().required('Required')
    })

    const onSubmit = values => {
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }

    return (
        <FormContainer>
            <div className='flex flex-col space-y-4'>
                {/* {
                    liveById.map((item, index) => {
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
                } */}
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
                                    <div className='flex flex-row w-full justify-between'>
                                        <FormControl
                                            control={'input'}
                                            label={'Pukul'}
                                            name={'pukul'}
                                        />
                                        <FormControl
                                            control={'select'}
                                            label={'Unit'}
                                            name={'unit'}
                                            options={unitOptions}
                                        />
                                        <FormControl
                                            control={'select'}
                                            label={'Server'}
                                            name={'server'}
                                            options={serverOptions}
                                        />
                                    </div>
                                    <FormControl
                                        control={'input'}
                                        label={'Modem Up'}
                                        name={'modemup'}
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

export default LiveEditForm