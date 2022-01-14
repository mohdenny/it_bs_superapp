import React from 'react'
import classnames from 'classnames'

const ButtonGeneral = ({ name, label, isActiveFilterStatus, setIsActiveFilterStatus, ticketToCount, countTicketByStatus }) => {
    return (
        <button 
            className={classnames('bg-white text-gray-800 px-4 py-1 border-2 rounded-xl hover:bg-gray-100', {
            'bg-gray-100 text-gray-900 font-bold shadow-md' : isActiveFilterStatus === name
            })} 
            onClick={() => setIsActiveFilterStatus(name)}
        >
            {label} 

            { 
                ticketToCount && countTicketByStatus(ticketToCount, name) ?
                    <sup> {countTicketByStatus(ticketToCount, name)}</sup> 
                    : 
                    null
            }
        </button>
    )
}

export default ButtonGeneral
