import React from 'react'
import classnames from 'classnames'

const ReportBar = ({  isActiveTab, setIsActiveTab }) => {
    return (
        <div className='flex flex-col items-center justify-center py-4 bg-white h-auto w-full'>
            <div className='flex items-center justify-center h-12 space-x-4 w-full py-2'>
                <form className='flex flex-row h-full items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="border-l-4 border-t-2 border-b-2 py-1 border-gray-300 rounded-l-xl px-2 h-full w-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type={'text'} className='border-2 border-gray-300 h-8 rounded-r-xl'/>
                </form>
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
                    Live Report
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
                                className='flex flex-row h-full items-center space-x-2 justify-center px-2 bg-blue-400 rounded-xl hover:bg-blue-500'
                                
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