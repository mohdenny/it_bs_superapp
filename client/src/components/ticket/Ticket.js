import React, { useState, useEffect } from 'react'
import moment from 'moment'
import classnames from 'classnames'
import Modal from '../modal/Modal'
import TicketForm from './TicketForm'
import TicketDetail from './TicketDetail'
import TicketHistory from './TicketHistory'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTickets, getTicket } from '../../actions/ticket'

const Ticket = ({ getTickets, getTicket, ticket: { tickets, ticket } }) => {
    const [ term, setTerm ] = useState()
    const [ data, setData ] = useState(tickets)
    const [ callModalForm, setCallModalForm ] = useState(false)
    const [ callModalDetail, setCallModalDetail ] = useState(false)
    const [ callModalHistory, setCallModalHistory ] = useState(false)
    const [ dataModal, setDataModal ] = useState()

    useEffect(() => {
        getTickets()
        getTicket(term)
    }, [getTickets, getTicket, tickets, term])

    const filterTicket = (term) => {
        setData(term)
        setData(ticket)
    }

    const countTicketByTerm = (data, term) => {
        let count = data.filter(item => item.status === term)
        return count.length
    }

    const handleCallModalForm = (title, data, items) => {
        setCallModalForm(true)
        setDataModal({'title': title, 'data': data, 'items': items})
    }

    const handleCallModalHistory = (title, data, items) => {
        setCallModalHistory(true)
        setDataModal({'title': title, 'data': data, 'items': items})
    }

    const handleCallModalDetail = (title, data, items) => {
        setCallModalDetail(true)
        setDataModal({'title': title, 'data': data, 'items': items})
    }

    return (
        <>
            <div className='relative z-0 space-y-4 h-full w-full'>
                <div className='flex flex-col items-center justify-center py-4 bg-white h-auto w-full '>
                    <div className='flex flex-row items-center justify-center h-12 space-x-4 w-full py-2'>
                        <button 
                            className='flex flex-row h-full items-center space-x-2 justify-center px-2 bg-blue-400 rounded-xl hover:bg-blue-500'
                            onClick={() => handleCallModalForm('Create New Ticket')}
                        >
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
                            onClick={() => setData()}
                        >
                            All
                        </button>
                        <button 
                            className={classnames('bg-yellow-200 text-yellow-800 px-4 py-1 rounded-xl hover:bg-yellow-300', {
                            'bg-yellow-300 text-yellow-900 font-bold shadow-md' : term === 'open'
                            })} 
                            onClick={() => setData('open')}
                        >   
                            Open { countTicketByTerm(tickets, 'open') && <sup>{`${countTicketByTerm(tickets, 'open')}`}</sup> }
                        </button>
                        <button 
                            className={classnames('bg-blue-200 text-blue-800 px-4 py-1 rounded-xl hover:bg-blue-300', {
                            'bg-blue-300 text-blue-900 font-bold shadow-md' : term === 'in progress'
                            })} 
                            onClick={() => setData('in progress')}
                        >   
                            In Progress { countTicketByTerm(tickets, 'in progress') && <sup>{`${countTicketByTerm(tickets, 'in progress')}`}</sup> }
                        </button>
                        <button 
                            className={classnames('bg-red-200 text-red-800 px-4 py-1 rounded-xl hover:bg-red-300', {
                            'bg-red-300 text-red-900 font-bold shadow-md' : term === 'pending'
                            })} 
                            onClick={() => setData('pending')}
                        >   
                            Pending { countTicketByTerm(tickets, 'pending') && <sup>{`${countTicketByTerm(tickets, 'pending')}`}</sup> }
                        </button>
                        <button 
                            className={classnames('bg-pink-200 text-pink-800 px-4 py-1 rounded-xl hover:bg-pink-300', {
                            'bg-pink-300 text-pink-900 font-bold shadow-md' : term === 'on hold'
                            })} 
                            onClick={() => setData('on hold')}
                        >   
                            On Hold { countTicketByTerm(tickets, 'on hold') && <sup>{`${countTicketByTerm(tickets, 'on hold')}`}</sup> }
                        </button>
                        <button 
                            className={classnames('bg-purple-200 text-purple-800 px-4 py-1 rounded-xl hover:bg-purple-300', {
                            'bg-purple-300 text-purple-900 font-bold shadow-md' : term === 'escalated'
                            })} 
                            onClick={() => setData('escalated')}
                        >   
                            Escalated { countTicketByTerm(tickets, 'escalated') && <sup>{`${countTicketByTerm(tickets, 'escalated')}`}</sup> }
                        </button>
                        <button 
                            className={classnames('bg-green-200 text-green-800 px-4 py-1 rounded-xl hover:bg-green-300', {
                            'bg-green-300 text-green-900 font-bold shadow-md' : term === 'solved'
                            })} 
                            onClick={() => setData('solved')}
                        >   
                            Solved { countTicketByTerm(tickets, 'solved') && <sup>{`${countTicketByTerm(tickets, 'solved')}`}</sup> }
                        </button>
                        <button 
                            className={classnames('bg-gray-200 text-gray-800 px-4 py-1 rounded-xl hover:bg-gray-300', {
                            'bg-gray-300 text-gray-900 font-bold shadow-md' : term === 'closed'
                            })} 
                            onClick={() => setData('closed')}
                        >   
                            Closed { countTicketByTerm(tickets, 'closed') && <sup>{`${countTicketByTerm(tickets, 'closed')}`}</sup> }
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
                                            data && data.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className='ml-4'>
                                                                <button className="text-sm text-gray-900 font-bold uppercase hover:text-gray-700" onClick={() => handleCallModalDetail(item.subject, item, item.history)}>{item.subject}</button>
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
                                                            <button className="text-indigo-600 hover:text-indigo-900" onClick={() => handleCallModalHistory(item.subject, item, item.history)}>
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
                callModalForm && 
                    ( 
                        <Modal data={dataModal} onClick={setCallModalForm}/>
                        //     <TicketForm data={dataModal}/>
                        // </Modal> 
                    )
            }
            { 
                callModalDetail && 
                    ( 
                        <Modal data={dataModal} onClick={setCallModalDetail}/>
                        //     <TicketDetail data={dataModal}/>
                        // </Modal>
                    )
            }
            {   
                callModalHistory && 
                    (
                        <Modal data={dataModal} onClick={setCallModalHistory}/>
                        //     <TicketHistory data={dataModal}/>
                        // </Modal>
                    ) 
            }
        </>
    )
}
Ticket.propTypes = {
    getTickets: PropTypes.func.isRequired,
    ticket: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    ticket: state.ticket
})

export default connect(mapStateToProps, { getTickets, getTicket })(Ticket)