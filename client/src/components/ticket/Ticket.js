import React, { useState, useEffect } from 'react'
import { dataTicket } from '../../utils/staticData'
import moment from 'moment'
import classnames from 'classnames'

const Ticket = () => {
    const [ term, setTerm ] = useState()
    const [ filterTicket, setFilterTicket ] = useState()

    const filterByStatus = (data, term) => {
        if ( !term ) {
            setFilterTicket(data)
        } else {
            setFilterTicket(data.filter(item => item.status === term))
        }
    }

    useEffect(() => {
        filterByStatus(dataTicket, term)
    })

    return (
        <div className='space-y-4'>
            <div className='flex flex-col items-center justify-center bg-white h-auto w-full '>
                <div className='h-12 space-x-4'>
                    <form className='flex flex-row h-full items-center justify-center py-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" class="border-l-4 border-t-2 border-b-2 rounded-l-xl px-2 py-1 h-full w-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input type={'text'} className='border-2 border-gray-400 h-8 rounded-r-xl'/>
                    </form>
                </div>
                <div className='flex flex-row items-center justify-center h-12 space-x-4'>
                    <button 
                        className={classnames('bg-white text-gray-800 px-4 py-1 border-2 rounded-xl', {
                        'bg-gray-300 text-gray-900 font-bold shadow-md' : !term
                        })} 
                        onClick={() => setTerm()}
                    >
                        All
                    </button>
                    <button 
                        className={classnames('bg-yellow-300 text-yellow-800 px-4 py-1 rounded-xl', {
                        'bg-yellow-400 text-yellow-900 font-bold shadow-md' : term === 'open'
                        })} 
                        onClick={() => setTerm('open')}
                    >   
                        Open
                    </button>
                    <button 
                        className={classnames('bg-blue-300 text-blue-800 px-4 py-1 rounded-xl', {
                        'bg-blue-400 text-blue-900 font-bold shadow-md' : term === 'in progress'
                        })} 
                        onClick={() => setTerm('in progress')}
                    >   
                        In Progress
                    </button>
                    <button 
                        className={classnames('bg-red-300 text-red-800 px-4 py-1 rounded-xl', {
                        'bg-red-400 text-red-900 font-bold shadow-md' : term === 'pending'
                        })} 
                        onClick={() => setTerm('pending')}
                    >   
                        Pending
                    </button>
                    <button 
                        className={classnames('bg-pink-300 text-pink-800 px-4 py-1 rounded-xl', {
                        'bg-pink-400 text-pink-900 font-bold shadow-md' : term === 'on hold'
                        })} 
                        onClick={() => setTerm('on hold')}
                    >   
                        On Hold
                    </button>
                    <button 
                        className={classnames('bg-purple-300 text-purple-800 px-4 py-1 rounded-xl', {
                        'bg-purple-400 text-purple-900 font-bold shadow-md' : term === 'escalated'
                        })} 
                        onClick={() => setTerm('escalated')}
                    >   
                        Escalated
                    </button>
                    <button 
                        className={classnames('bg-green-300 text-green-800 px-4 py-1 rounded-xl', {
                        'bg-green-400 text-green-900 font-bold shadow-md' : term === 'solved'
                        })} 
                        onClick={() => setTerm('solved')}
                    >   
                        Solved
                    </button>
                    <button 
                        className={classnames('bg-gray-300 text-gray-800 px-4 py-1 rounded-xl', {
                        'bg-gray-400 text-gray-900 font-bold shadow-md' : term === 'closed'
                        })} 
                        onClick={() => setTerm('closed')}
                    >   
                        Closed
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
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Onduty
                                        </th>
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
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        filterTicket && filterTicket.map((item, index) => (
                                            <tr key={index}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="ml-4">
                                                            <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                                            <div className="text-sm font-medium text-gray-900">{item.onduty[1]}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm text-gray-900 uppercase">{item.department}</div>
                                                    <div className="text-sm text-gray-500 capitalize">{item.subject}</div>
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
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        History
                                                    </a>
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        Edit
                                                    </a>
                                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                        Delete
                                                    </a>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Ticket