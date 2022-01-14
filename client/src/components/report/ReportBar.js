import React from 'react'
import classnames from 'classnames'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormControl from '../form/FormControl'

const initialValues = {
    search: ''
}

const ReportBar = ({  isActiveTab, setIsActiveTab }) => {
    const validationSchema = Yup.object({
        search: Yup.string()
    })

    const onSubmit = values => {
        console.log('Form data', values)
        console.log('Saved data', JSON.parse(JSON.stringify(values)))
    }
    
    return (
        <div className='flex flex-col items-center justify-center py-4 bg-white h-auto w-full'>
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
                <button 
                    className={classnames('bg-white text-gray-800 px-4 py-1 border-2  rounded-xl hover:bg-gray-100', {
                    'bg-gray-100 text-gray-900 font-bold shadow-md' : isActiveTab === 'program'
                    })} 
                    onClick={() => setIsActiveTab('program')}
                >
                    Program
                </button>
                <button 
                    className={classnames('bg-white text-gray-800 px-4 py-1 border-2  rounded-xl hover:bg-gray-100', {
                    'bg-gray-100 text-gray-900 font-bold shadow-md' : isActiveTab === 'live-report'
                    })} 
                    onClick={() => setIsActiveTab('live-report')}
                >
                    Live
                </button>
            </div>
            <div className='flex flex-row items-center justify-center px-4 h-12 space-x-4 w-full py-2'>
                {
                    isActiveTab !== 'live-report' ?
                        (
                            <button 
                                className='flex flex-row h-full items-center space-x-2 justify-center px-2 bg-blue-400 rounded-xl hover:bg-blue-500'
                                
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white py-1 h-full w-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className='text-white'>Create New</p>
                            </button>
                        )
                        :
                        (
                            <button 
                                className='flex flex-row h-full items-center space-x-2 justify-center px-2 bg-green-400 rounded-xl hover:bg-green-500'
                                
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white py-1 h-full w-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <p className='text-white'>Create New</p>
                            </button>
                        )
                } 
            </div>
        </div>
    )
}

export default ReportBar