import React, { useState, useEffect } from 'react'
import Modal from '../modal/Modal'
import TicketBar from './TicketBar'
import TicketList from './TicketList'
import TicketForm from './TicketForm'
import TicketDetail from './TicketDetail'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTickets, getTicketById, getTicketByStatus } from '../../actions/ticket'

const initialState = {
    modal: {detail: false, form: false}
}

const Ticket = ({ getTickets, getTicketById, getTicketByStatus, state = initialState, ticket: { tickets, ticket, filteredTicketsByStatus } }) => {
    const [ isActiveButton, setIsActiveButton ] = useState()
    // const [ listTicket, setListTicket ] = useState(tickets)
    const [ callModal, setCallModal ] = useState(state.modal)

    const countTicketByTerm = (term) => {
        let count = tickets.filter(item => item.status === term)
        return count.length
    }

    const handleCallModal = (modal, id = null)  => {
        if( id !== null && modal === 'modal-detail' ){
            getTicketById(id)
            setCallModal({...state, detail: 'true'})
        } else {
            setCallModal({...state, form: 'true'})
        }
    }

    const handleButtonFilterByStatus = async (status) => {
        setIsActiveButton(status)

        if(!status){
            getTickets()
        } else {
            getTicketByStatus(status)
        }
    }

    useEffect(() => {
        getTickets()
        
    }, [getTickets])

    return (
        <>
            <div className='relative z-0 space-y-4 h-full w-full'>
                <TicketBar 
                    tickets={tickets}
                    countTicketByTerm={countTicketByTerm}
                    handleCallModal={handleCallModal} 
                    isActiveButton={isActiveButton} 
                    handleButtonFilterByStatus={handleButtonFilterByStatus}
                />
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
                                        <TicketList filteredTicketsByStatus={filteredTicketsByStatus} handleCallModal={handleCallModal} />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { 
                callModal.form && 
                    ( 
                        <Modal ticket={ticket} setCallModal={setCallModal}>
                            <TicketForm ticketById={ticket}/>
                        </Modal> 
                    )
            }
            { 
                ticket && callModal.detail &&
                    ( 
                        <Modal ticket={ticket} setCallModal={setCallModal}>
                            <TicketDetail ticketById={ticket} />
                        </Modal>
                    )
            }
        </>
    )
}
Ticket.propTypes = {
    getTickets: PropTypes.func.isRequired,
    getTicketById: PropTypes.func.isRequired,
    getTicketByStatus: PropTypes.func.isRequired,
    ticket: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    ticket: state.ticket
})

export default connect(mapStateToProps, { getTickets, getTicketById, getTicketByStatus })(Ticket)