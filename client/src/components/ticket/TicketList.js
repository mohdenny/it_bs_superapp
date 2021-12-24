import React from 'react'
import classnames from 'classnames'
import moment from 'moment'

const TicketList = ({ filteredTicketsByStatus, handleCallModal }) => {
    return (
        <>
            { 
                filteredTicketsByStatus && filteredTicketsByStatus.map(item => {
                    return (
                        <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className='ml-4'>
                                    <button className="text-sm text-gray-900 font-bold uppercase hover:text-gray-700" onClick={() => handleCallModal('modal-detail', item.id)}>{item.subject}</button>
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
        </>
    )
}

export default TicketList