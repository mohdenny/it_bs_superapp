import React, { useState, useEffect } from 'react'
import Modal from '../modal/Modal'
import { Table } from '../table/Table'
import { PROGRAMCOLUMNSTABLE } from './ProgramColumnTable'
import { LIVECOLUMNSTABLE } from './LiveColumnTable'
import ReportBar from './ReportBar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPrograms, getProgramById, getLives, getLiveById } from '../../actions/report'

const Report = ({ 
    getPrograms, 
    getProgramById, 
    getLives, 
    getLiveById, 
    report: { 
        programs, 
        program,
        lives,
        live 
    } 
}) => {
    const [ isActiveTab, setIsActiveTab ] = useState('program')
    const [ callModal, setCallModal ] = useState({detail: false, create: false, edit: false})
    const [ nameModal, setNameModal ] = useState()

    const handleCallModal = (modal, id = null)  => {
        switch(modal){
            case 'modal-detail':
                setNameModal(modal)
                getProgramById(id)
                setCallModal( prevState => ({...prevState , detail: 'true' }))
                break
            case 'modal-create-form':
                setNameModal(modal)
                setCallModal( prevState => ({...prevState , create: 'true'}))
                break
            case 'modal-edit-form':
                setNameModal(modal)
                getProgramById(id)
                setCallModal( prevState => ({...prevState , edit: 'true' }))
                break
            default:
                return null
        }
    }

    useEffect(() => {
        
        if(isActiveTab === 'program'){
            getPrograms()
        }

        if(isActiveTab === 'live-report'){
            getLives()
        }

    }, [getPrograms, getLives, isActiveTab])

    return (
        <>
            <div className='space-y-4 h-full w-full'>
                <ReportBar 
                    isActive={isActiveTab}
                    setIsActive={setIsActiveTab}
                    handleCallModal={handleCallModal}
                />
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden border-b border-gray-200 py-4 px-4 bg-white sm:rounded-lg">
                                {
                                    isActiveTab === 'program' && programs && <Table columnsTable={PROGRAMCOLUMNSTABLE} datas={programs} onClick={handleCallModal}/>
                                }
                                {
                                    isActiveTab === 'live-report' && lives && <Table columnsTable={LIVECOLUMNSTABLE} datas={lives} onClick={handleCallModal}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                { 
                    isActiveTab === 'program' && callModal.create && 
                        ( 
                            <Modal title={'Create new report Program'} nameModal={nameModal} setCallModal={setCallModal}>
                                {/* <TicketCreateForm /> */}
                            </Modal> 
                        )
                }
                { 
                    isActiveTab === 'live-report' && callModal.create && 
                        ( 
                            <Modal title={'Create new report Live'} nameModal={nameModal} setCallModal={setCallModal}>
                                {/* <TicketCreateForm /> */}
                            </Modal> 
                        )
                }
                { 
                    program && callModal.edit && 
                        ( 
                            <Modal title={'Update ticket'} nameModal={nameModal} setCallModal={setCallModal}>
                                {/* <TicketEditForm ticketById={ticket}/> */}
                            </Modal> 
                        )
                }
                { 
                    program && callModal.detail &&
                        ( 
                            <Modal title={program} nameModal={nameModal} setCallModal={setCallModal}>
                                {/* <TicketDetail ticketById={ticket} /> */}
                            </Modal>
                        )
                }
        </>
    )
}

Report.propTypes = {
    getPrograms: PropTypes.func.isRequired,
    getProgramById: PropTypes.func.isRequired,
    getLives: PropTypes.func.isRequired,
    getLiveById: PropTypes.func.isRequired,
    report: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    report: state.report
})

export default connect(mapStateToProps, { getPrograms, getProgramById, getLives, getLiveById })(Report)