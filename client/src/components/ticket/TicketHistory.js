import React, { useState } from 'react'
import moment from 'moment'
import classnames from 'classnames'

const TicketHistory = ({ data }) => {

    console.log(data)
    const [ items, setItems ] = useState(data.data)
    const [ readNote, setReadNote ] = useState(true)

    const handleReadNote = (value, data, id) => {
        if(value){
            setReadNote(value)
            setItems(data)
        }else{
            setReadNote(value)
            setItems( data.filter(item => item.id === id) )
        }
        
    }

    return (
        <table className="min-w-full divide-y divide-gray-200 overflow-hidden">
            <thead className="bg-gray-50">
                <tr>
                    {   
                        readNote ?
                        (
                            <>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Date
                                </th>
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
                                    Status
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
                                >
                                    Note
                                </th>
                            </>
                        ) :
                        (
                            <>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
                                >
                                    Note
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Action</span>
                                </th>
                            </>
                        )
                    }
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {
                    items && items.map(item => {
                        return (
                            <tr key={item.id} className='border-2'>
                                {
                                    readNote ?
                                    (
                                        <>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                <div className='ml-4'>
                                                    {moment(item.date).format('D-M-YYYY, H:mm')}
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
                                                    { 'bg-yellow-200 text-yellow-800' : item.status === 'open' },
                                                    { 'bg-blue-200 text-blue-800' : item.status === 'in progress' },
                                                    { 'bg-red-200 text-red-800' : item.status === 'pending' },
                                                    { 'bg-pink-200 text-pink-800' : item.status === 'on hold' },
                                                    { 'bg-purple-200 text-purple-800' : item.status === 'escalated' },
                                                    { 'bg-green-200 text-green-800' : item.status === 'solved' },
                                                    { 'bg-gray-200 text-gray-800' : item.status === 'closed' },
                                                )}>
                                                    {item.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                                <button 
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                    onClick={() => handleReadNote(false, data.item, item.id)}
                                                >
                                                    Read
                                                </button>
                                            </td>
                                        </>
                                    ) : 
                                    (
                                        <>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {item.note}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap flex justify-end text-sm font-medium space-x-2">
                                                <button 
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                    onClick={() => handleReadNote(true, data.itemTicket, item.id)}
                                                >
                                                    Back
                                                </button>
                                            </td>
                                        </>
                                    )
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default TicketHistory