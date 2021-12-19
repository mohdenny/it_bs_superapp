import React, { useState, useEffect } from 'react'
import { dataTicket } from '../../utils/staticData'
import moment from 'moment'
import classnames from 'classnames'
import Modal from '../modal/Modal'
import TicketDetail from './TicketDetail'
import TicketHistory from './TicketHistory'

const Ticket = () => {
    const [ term, setTerm ] = useState()
    const [ filterTicket, setFilterTicket ] = useState()
    const [ ticketModalDetail, setTicketModalDetail ] = useState(false)
    const [ ticketModalHistory, setTicketModalHistory ] = useState(false)
    const [ dataModal, setDataModal ] = useState()

    const filterByStatus = (data, term) => {
        if ( !term ) {
            setFilterTicket(data)
        } else {
            setFilterTicket(data.filter(item => item.status === term))
        }
    }

    const countTicketByTerm = (data, term) => {
        let count = data.filter(item => item.status === term)
        return count.length
    }

    useEffect(() => {
        filterByStatus(dataTicket, term)
    })

    const handleTicketModalHistory = (dataTicket, itemTicket) => {
        setTicketModalHistory(true)
        setDataModal({'dataTicket': dataTicket, 'itemTicket': itemTicket})
    }

    const handleTicketModalDetail = (dataTicket, itemTicket) => {
        setTicketModalDetail(true)
        setDataModal({'dataTicket': dataTicket, 'itemTicket': itemTicket})
    }

    return (
        <>
            <div className='relative z-0 space-y-4 h-full w-full'>
                <div className='flex flex-col items-center justify-center py-4 bg-white h-auto w-full '>
                    <div className='flex flex-row items-center justify-center h-12 space-x-4 w-full py-2'>
                        <button className='flex flex-row h-full items-center space-x-2 justify-center px-2 bg-blue-400 rounded-xl hover:bg-blue-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-white py-1 h-full w-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className='text-white'>Create New</p>
                        </button>
                        <form className='flex flex-row h-full items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="border-l-4 border-t-2 border-b-2 py-1 border-gray-300 rounded-l-xl px-2 h-full w-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input type={'text'} className='border-2 border-gray-300 h-8 rounded-r-xl'/>
                        </form>
                    </div>
                    <div className='flex flex-row items-center justify-center h-12 space-x-4 w-full'>
                        <button 
                            className={classnames('bg-white text-gray-800 px-4 py-1 border-2  rounded-xl hover:bg-gray-300', {
                            'bg-gray-300 text-gray-900 font-bold shadow-md' : !term
                            })} 
                            onClick={() => setTerm()}
                        >
                            All
                        </button>
                        <button 
                            className={classnames('bg-yellow-200 text-yellow-800 px-4 py-1 rounded-xl hover:bg-yellow-300', {
                            'bg-yellow-300 text-yellow-900 font-bold shadow-md' : term === 'open'
                            })} 
                            onClick={() => setTerm('open')}
                        >   
                            Open { countTicketByTerm(dataTicket, 'open') && <sup>{`${countTicketByTerm(dataTicket, 'open')}`}</sup> }
                        </button>
                        <button 
                            className={classnames('bg-blue-200 text-blue-800 px-4 py-1 rounded-xl hover:bg-blue-300', {
                            'bg-blue-300 text-blue-900 font-bold shadow-md' : term === 'in progress'
                            })} 
                            onClick={() => setTerm('in progress')}
                        >   
                            In Progress { countTicketByTerm(dataTicket, 'in progress') && <sup>{`${countTicketByTerm(dataTicket, 'in progress')}`}</sup> }
                        </button>
                        <button 
                            className={classnames('bg-red-200 text-red-800 px-4 py-1 rounded-xl hover:bg-red-300', {
                            'bg-red-300 text-red-900 font-bold shadow-md' : term === 'pending'
                            })} 
                            onClick={() => setTerm('pending')}
                        >   
                            Pending { countTicketByTerm(dataTicket, 'pending') && <sup>{`${countTicketByTerm(dataTicket, 'pending')}`}</sup> }
                        </button>
                        <button 
                            className={classnames('bg-pink-200 text-pink-800 px-4 py-1 rounded-xl hover:bg-pink-300', {
                            'bg-pink-300 text-pink-900 font-bold shadow-md' : term === 'on hold'
                            })} 
                            onClick={() => setTerm('on hold')}
                        >   
                            On Hold { countTicketByTerm(dataTicket, 'on hold') && <sup>{`${countTicketByTerm(dataTicket, 'on hold')}`}</sup> }
                        </button>
                        <button 
                            className={classnames('bg-purple-200 text-purple-800 px-4 py-1 rounded-xl hover:bg-purple-300', {
                            'bg-purple-300 text-purple-900 font-bold shadow-md' : term === 'escalated'
                            })} 
                            onClick={() => setTerm('escalated')}
                        >   
                            Escalated { countTicketByTerm(dataTicket, 'escalated') && <sup>{`${countTicketByTerm(dataTicket, 'escalated')}`}</sup> }
                        </button>
                        <button 
                            className={classnames('bg-green-200 text-green-800 px-4 py-1 rounded-xl hover:bg-green-300', {
                            'bg-green-300 text-green-900 font-bold shadow-md' : term === 'solved'
                            })} 
                            onClick={() => setTerm('solved')}
                        >   
                            Solved { countTicketByTerm(dataTicket, 'solved') && <sup>{`${countTicketByTerm(dataTicket, 'solved')}`}</sup> }
                        </button>
                        <button 
                            className={classnames('bg-gray-200 text-gray-800 px-4 py-1 rounded-xl hover:bg-gray-300', {
                            'bg-gray-300 text-gray-900 font-bold shadow-md' : term === 'closed'
                            })} 
                            onClick={() => setTerm('closed')}
                        >   
                            Closed { countTicketByTerm(dataTicket, 'closed') && <sup>{`${countTicketByTerm(dataTicket, 'closed')}`}</sup> }
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
                                            >
                                                Subject
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Onduty
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Priority
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Created
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Action</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {
                                            filterTicket && filterTicket.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className='ml-4'>
                                                                <button className="text-sm text-gray-900 font-bold uppercase hover:text-gray-700" onClick={() => handleTicketModalDetail(item, item.history)}>{item.subject}</button>
                                                                <div className="text-sm text-gray-500 capitalize">{item.department}</div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="flex-col">
                                                                    {   
                                                                        item.onduty && item.onduty.map((item, index) => {
                                                                            return (
                                                                                <div key={index} className="text-sm text-gray-900">{item}</div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <span className={classnames("px-2 inline-flex text-xs leading-5 font-semibold rounded-full capitalize", 
                                                                { 'bg-yellow-300 text-yellow-800' : item.status === 'open' },
                                                                { 'bg-blue-300 text-blue-800' : item.status === 'in progress' },
                                                                { 'bg-red-300 text-red-800' : item.status === 'pending' },
                                                                { 'bg-pink-300 text-pink-800' : item.status === 'on hold' },
                                                                { 'bg-purple-300 text-purple-800' : item.status === 'escalated' },
                                                                { 'bg-green-300 text-green-800' : item.status === 'solved' },
                                                                { 'bg-gray-300 text-gray-800' : item.status === 'closed' },
                                                            )}>
                                                                {item.status}
                                                            </span>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 capitalize">{item.priority}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">{moment(item.date).format('D-M-YYYY, H:mm')}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                                            <button className="text-indigo-600 hover:text-indigo-900" onClick={() => handleTicketModalHistory(item, item.history)}>
                                                                History
                                                            </button>
                                                            <button className="text-indigo-600 hover:text-indigo-900">
                                                                Edit
                                                            </button>
                                                            <button className="text-indigo-600 hover:text-indigo-900">
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { 
                ticketModalDetail && 
                    ( 
                        <Modal data={dataModal} onClick={setTicketModalDetail}>
                            <TicketDetail data={dataModal}/>
                        </Modal> 
                    )
            }
            {   
                ticketModalHistory && 
                    (
                        <Modal data={dataModal} onClick={setTicketModalHistory}>
                            <TicketHistory data={dataModal}/>
                        </Modal>
                    ) 
            }
        </>
    )
}

export default Ticket