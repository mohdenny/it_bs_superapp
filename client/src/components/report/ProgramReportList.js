import React from 'react'
import moment from 'moment'

const ProgramReportList = ({ programs }) => {
    return (
        <>
            { 
                programs && programs.map(item => {
                    return (
                        <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className='ml-4'>
                                    <button 
                                        className="text-sm text-gray-900 font-bold uppercase hover:text-gray-700" 
                                        // onClick={() => handleCallModal('modal-detail', item.id)}
                                    >
                                        {item.program}
                                    </button>
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
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">{moment(item.date).format('D-M-YYYY, H:mm')}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                <button 
                                    className="text-indigo-600 hover:text-indigo-900"
                                    // onClick={() => handleCallModal('modal-edit-form', item.id)}
                                >
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

export default ProgramReportList