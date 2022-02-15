import React from 'react'

const StatusTicket = ({ status }) => {
    switch(status){
        case 'open':
            return  (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap capitalize bg-yellow-300 text-yellow-800">
                            {status}
                        </span>
                    )
        case 'in progress':
            return  (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap capitalize bg-blue-300 text-blue-800">
                            {status}
                        </span>
                    )
        case 'pending':
            return  (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap capitalize bg-red-300 text-red-800">
                            {status}
                        </span>
                    )
        case 'on hold':
            return  (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap capitalize bg-pink-300 text-pink-800">
                            {status}
                        </span>
                    )
        case 'escalated':
            return  (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap capitalize bg-purple-300 text-purple-800">
                            {status}
                        </span>
                    )
        case 'solved':
            return  (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap capitalize bg-green-300 text-green-800">
                            {status}
                        </span>
                    )
        case 'closed':
            return  (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full whitespace-nowrap capitalize bg-gray-300 text-gray-800">
                            {status}
                        </span>
                    )
        default:
            return null
    }
}

export default StatusTicket