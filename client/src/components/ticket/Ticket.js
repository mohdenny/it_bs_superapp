import React, { useState, useEffect } from 'react'
import useCount from '../../hooks/useCount'
import Modal from '../modal/Modal'
import { Table } from '../table/Table'
import { TICKETCOLUMNSTABLE } from './TicketColumnTable'
import TicketBar from './TicketBar'
import TicketCreateForm from './TicketCreateForm'
import TicketEditForm from './TicketEditForm'
import TicketDetail from './TicketDetail'
import BadgeControl from '../badge/BadgeControl'
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
            <div className='space-y-4 h-full w-full'>
                {
                    <TicketBar 
                        countTicketByStatus={countTicketByStatus}
                        handleCallModal={handleCallModal}
                        ticketToCount={ticketToCount} 
                        isActiveFilterStatus={isActiveFilterStatus} 
                        setIsActiveFilterStatus={setIsActiveFilterStatus}
                    />
                }
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 py-4 px-4 bg-white sm:rounded-lg">
                                {
                                    tickets && <Table columnsTable={TICKETCOLUMNSTABLE} datas={tickets} onClick={handleCallModal} BadgeControl={BadgeControl}/>
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