import React from 'react'
import classnames from 'classnames'

const TicketBar = ({ 
    ticketToCount, 
    countTicketByStatus, 
    handleCallModal, 
    isActiveFilterStatus, 
    setIsActiveFilterStatus 
}) => {

    return (
        <div className='flex flex-col items-center justify-center py-4 bg-white h-auto w-full '>
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
                    'bg-gray-100 text-gray-900 font-bold shadow-md' : !isActiveFilterStatus
                    })} 
                    onClick={() => setIsActiveFilterStatus()}
                >
                    All
                </button>
                <button 
                    className={classnames('bg-yellow-200 text-yellow-800 px-4 py-1 rounded-xl hover:bg-yellow-300', {
                    'bg-yellow-300 text-yellow-900 font-bold shadow-md' : isActiveFilterStatus === 'open'
                    })} 
                    onClick={() => setIsActiveFilterStatus('open')}
                >   
                    Open { ticketToCount && <sup>{`${countTicketByStatus(ticketToCount, 'open')}`}</sup> }
                </button>
                <button 
                    className={classnames('bg-blue-200 text-blue-800 px-4 py-1 rounded-xl hover:bg-blue-300', {
                    'bg-blue-300 text-blue-900 font-bold shadow-md' : isActiveFilterStatus === 'in progress'
                    })} 
                    onClick={() => setIsActiveFilterStatus('in progress')}
                >   
                    In Progress { ticketToCount && <sup>{`${countTicketByStatus(ticketToCount, 'in progress')}`}</sup> }
                </button>
                <button 
                    className={classnames('bg-red-200 text-red-800 px-4 py-1 rounded-xl hover:bg-red-300', {
                    'bg-red-300 text-red-900 font-bold shadow-md' : isActiveFilterStatus === 'pending'
                    })} 
                    onClick={() => setIsActiveFilterStatus('pending')}
                >   
                    Pending { ticketToCount && <sup>{`${countTicketByStatus(ticketToCount, 'pending')}`}</sup> }
                </button>
                <button 
                    className={classnames('bg-pink-200 text-pink-800 px-4 py-1 rounded-xl hover:bg-pink-300', {
                    'bg-pink-300 text-pink-900 font-bold shadow-md' : isActiveFilterStatus === 'on hold'
                    })} 
                    onClick={() => setIsActiveFilterStatus('on hold')}
                >   
                    On Hold { ticketToCount && <sup>{`${countTicketByStatus(ticketToCount, 'on hold')}`}</sup> }
                </button>
                <button 
                    className={classnames('bg-purple-200 text-purple-800 px-4 py-1 rounded-xl hover:bg-purple-300', {
                    'bg-purple-300 text-purple-900 font-bold shadow-md' : isActiveFilterStatus === 'escalated'
                    })} 
                    onClick={() => setIsActiveFilterStatus('escalated')}
                >   
                    Escalated { ticketToCount && <sup>{`${countTicketByStatus(ticketToCount, 'escalated')}`}</sup> }
                </button>
                <button 
                    className={classnames('bg-green-200 text-green-800 px-4 py-1 rounded-xl hover:bg-green-300', {
                    'bg-green-300 text-green-900 font-bold shadow-md' : isActiveFilterStatus === 'solved'
                    })} 
                    onClick={() => setIsActiveFilterStatus('solved')}
                >   
                    Solved { ticketToCount && <sup>{`${countTicketByStatus(ticketToCount, 'solved')}`}</sup> }
                </button>
                <button 
                    className={classnames('bg-gray-200 text-gray-800 px-4 py-1 rounded-xl hover:bg-gray-300', {
                    'bg-gray-300 text-gray-900 font-bold shadow-md' : isActiveFilterStatus === 'closed'
                    })} 
                    onClick={() => setIsActiveFilterStatus('closed')}
                >   
                    Closed { ticketToCount && <sup>{`${countTicketByStatus(ticketToCount, 'closed')}`}</sup> }
                </button>
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