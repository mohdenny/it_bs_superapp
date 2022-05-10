import React, { useState, useEffect } from 'react'
import Modal from '../modal/Modal'
import { Table } from '../table/Table'
import { PROGRAMCOLUMNSTABLE } from './ProgramColumnTable'
import { LIVECOLUMNSTABLE } from './LiveColumnTable'
import TableContainer from '../table/TableContainer'
import ReportBar from './ReportBar'
import ProgramCreateForm from './ProgramCreateForm'
import LiveCreateForm from './LiveCreateForm'
import ProgramDetail from './ProgramDetail'
import LiveDetail from './LiveDetail'
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
    const [ callModal, setCallModal ] = useState({detail: { program: false, live: false }, create: false, edit: false})
    const [ nameModal, setNameModal ] = useState()

    const handleCallModal = (modal, id = null)  => {
        switch(modal){
            case 'modal-detail-program':
                setNameModal(modal)
                getProgramById(id)
                setCallModal( prevState => ({...prevState , detail: {program: 'true', live: 'false'} }))
                break
            case 'modal-detail-live':
                setNameModal(modal)
                getProgramById(id)
                setCallModal( prevState => ({...prevState , detail: {program: 'false', live: 'true'} }))
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

        console.log(callModal)

    }, [callModal, getPrograms, getLives, isActiveTab])

    return (
        <>
            <div className='space-y-4 h-full w-full'>
                <ReportBar 
                    isActive={isActiveTab}
                    setIsActive={setIsActiveTab}
                    handleCallModal={handleCallModal}
                />
                <TableContainer>
                    {
                        isActiveTab === 'program' && programs && <Table columnsTable={PROGRAMCOLUMNSTABLE} datas={programs} onClick={handleCallModal}/>
                    }
                    {
                        isActiveTab === 'live-report' && lives && <Table columnsTable={LIVECOLUMNSTABLE} datas={lives} onClick={handleCallModal}/>
                    }
                </TableContainer>
            </div>
            { 
                isActiveTab === 'program' && callModal.create && 
                    ( 
                        <Modal title={'Create new report Program'} nameModal={nameModal} setCallModal={setCallModal}>
                            <ProgramCreateForm />
                        </Modal> 
                    )
            }
            { 
                isActiveTab === 'live-report' && callModal.create && 
                    ( 
                        <Modal title={'Create new report Live'} nameModal={nameModal} setCallModal={setCallModal}>
                            <LiveCreateForm />
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
                            <ProgramDetail programById={program} />
                        </Modal>
                    )
            }
            { 
                live && callModal.detail &&
                    ( 
                        <Modal title={live} nameModal={nameModal} setCallModal={setCallModal}>
                            <LiveDetail liveById={live} />
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