import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormControl from '../form/FormControl'
import ButtonControl from '../button/ButtonControl'

const valuesButtonGeneral = [
    { name: '', control: 'general', label: 'All' },
    { name: 'open', control: 'general', label: 'Open' },
    { name: 'in progress', control: 'general', label: 'In Progress' },
    { name: 'pending', control: 'general', label: 'Pending' },
    { name: 'on hold', control: 'general', label: 'On Hold' },
    { name: 'escalated', control: 'general', label: 'Escalated' },
    { name: 'solved', control: 'general', label: 'Solved' },
    { name: 'closed', control: 'general', label: 'Closed' }
]

const initialValues = {
    search: ''
}

const TicketBar = ({ 
    ticketToCount, 
    countTicketByStatus, 
    handleCallModal, 
    isActiveFilterStatus, 
    setIsActiveFilterStatus 
}) => {
    const validationSchema = Yup.object({
        search: Yup.string()
    })

    const onSubmit = values => {
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }

    return (
        <div className='flex flex-col items-center justify-center py-4 bg-white h-auto w-full '>
            <div className='flex items-center justify-center h-12 w-full py-2'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    <Form 
                        className='flex flex-row h-full items-center justify-center'
                    >
                        <FormControl
                            control={'search'}
                            name={'search'}
                        />
                    </Form>
                </Formik>
            </div>
            <div className='flex flex-row items-center justify-center h-12 space-x-4 w-full'>
                {
                    valuesButtonGeneral.map((item, index) => {
                        return (
                            <ButtonControl
                                key={index}
                                control={item.control}
                                name={item.name}
                                label={item.label}
                                isActiveFilterStatus={isActiveFilterStatus}
                                setIsActiveFilterStatus={setIsActiveFilterStatus}
                                countTicketByStatus={countTicketByStatus}
                                ticketToCount={ticketToCount}
                            />
                        )
                    })
                }
            </div>
            <div className='flex items-center justify-center h-12 space-x-4 w-full py-2'>
                <button 
                    className='flex flex-row h-full items-center space-x-2 justify-center px-2 bg-blue-400 rounded-xl hover:bg-blue-500'
                    onClick={() => handleCallModal('modal-create-form')}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="text-white py-1 h-full w-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className='text-white'>Create New</p>
                </button>
            </div>
        </div>
    )
}

export default TicketBar