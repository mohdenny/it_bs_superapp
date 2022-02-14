import React, { useState, useEffect } from 'react'
import Modal from '../modal/Modal'
import { Table } from '../table/Table'
import TicketBar from './TicketBar'
import TicketList from './TicketList'
import TicketCreateForm from './TicketCreateForm'
import TicketEditForm from './TicketEditForm'
import TicketDetail from './TicketDetail'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getTickets, getTicketById, getTicketByStatus } from '../../actions/ticket'

const Ticket = ({ 
    getTickets, 
    getTicketById, 
    getTicketByStatus, 
    ticket: { 
        tickets, 
        ticket, 
        ticketToCount 
    }
}) => {
    const [ isActiveFilterStatus, setIsActiveFilterStatus ] = useState('')
    const [ callModal, setCallModal ] = useState({detail: false, create: false, edit: false})
    const [ nameModal, setNameModal ] = useState()

    const countTicketByStatus = (data, status) => {
        let count = data.filter(item => item.status === status)
        return count.length
    }

    const handleCallModal = (modal, id = null)  => {
        switch(modal){
            case 'modal-detail':
                setNameModal(modal)
                getTicketById(id)
                setCallModal( prevState => ({...prevState , detail: 'true' }))
                break
            case 'modal-create-form':
                setNameModal(modal)
                setCallModal( prevState => ({...prevState , create: 'true'}))
                break
            case 'modal-edit-form':
                setNameModal(modal)
                getTicketById(id)
                setCallModal( prevState => ({...prevState , edit: 'true' }))
                break
            default:
                return null
        }
    }

    useEffect(() => {

        if(!isActiveFilterStatus){
            getTickets()
        }else{
            getTicketByStatus(isActiveFilterStatus)
        }

    }, [getTickets, isActiveFilterStatus, getTicketByStatus])

    return (
        <>
            <div className='relative z-0 space-y-4 h-full w-full'>
                <TicketBar 
                    ticketToCount={ticketToCount}
                    countTicketByStatus={countTicketByStatus}
                    handleCallModal={handleCallModal} 
                    isActiveFilterStatus={isActiveFilterStatus} 
                    setIsActiveFilterStatus={setIsActiveFilterStatus}
                />
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                {/* <table className="min-w-full divide-y divide-gray-200">
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
                                        <TicketList tickets={tickets} handleCallModal={handleCallModal} />
                                    </tbody>
                                </table> */}
                                {
                                    tickets && <Table datas={tickets} handleCallModal={handleCallModal}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { 
                callModal.create && 
                    ( 
                        <Modal title={'Create new ticket'} nameModal={nameModal} setCallModal={setCallModal}>
                            <TicketCreateForm />
                        </Modal> 
                    )
            }
            { 
                ticket && callModal.edit && 
                    ( 
                        <Modal title={'Update ticket'} nameModal={nameModal} setCallModal={setCallModal}>
                            <TicketEditForm ticketById={ticket}/>
                        </Modal> 
                    )
            }
            { 
                ticket && callModal.detail &&
                    ( 
                        <Modal title={ticket} nameModal={nameModal} setCallModal={setCallModal}>
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

export default connect(
    mapStateToProps, 
    { 
        getTickets, 
        getTicketById, 
        getTicketByStatus 
    })(Ticket)