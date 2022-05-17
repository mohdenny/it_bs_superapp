import React, { useState, useEffect } from 'react'
import ChecklistBar from './ChecklistBar'
import TableContainer from '../table/TableContainer'
import { Table } from '../table/Table'
import { CHECKLISTCOLUMNTABLE } from './ChecklistColumnTable'
import BadgeControl from '../badge/BadgeControl'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getChecklists, getChecklistById } from '../../actions/checklist'

const Checklist = ({ getChecklists, getChecklistById, checklist: { checklists, checklist } }) => {
    const [ isActiveFilterStatus, setIsActiveFilterStatus ] = useState('')
    const [ callModal, setCallModal ] = useState({detail: false, create: false, edit: false})
    const [ nameModal, setNameModal ] = useState()

    const checkingAlreadyFilled = (data, time) => {
        let count = data.filter(item => item.time === time)
        return count.length
    }

    const handleCallModal = (modal, id = null)  => {
        switch(modal){
            case 'modal-detail':
                setNameModal(modal)
                getChecklistById(id)
                setCallModal( prevState => ({...prevState , detail: 'true' }))
                break
            default:
                return null
        }
    }

    useEffect(() => {
        getChecklists()
    }, [getChecklists])

    return (
        <>
            <div className='space-y-4 h-full w-full'>
                <ChecklistBar 
                    checklists={checklists}
                    handleCallModal={handleCallModal}
                    isActive={isActiveFilterStatus} 
                    setIsActive={setIsActiveFilterStatus}
                    checkingAlreadyFilled={checkingAlreadyFilled}
                />
                <TableContainer>
                    {
                        checklists && <Table columnsTable={CHECKLISTCOLUMNTABLE} datas={checklists} onClick={handleCallModal} BadgeControl={BadgeControl}/>
                    }
                </TableContainer>
            </div>
        </>
    )
}

Checklist.propTypes = {
    getChecklists: PropTypes.func.isRequired,
    getChecklistById: PropTypes.func.isRequired,
    checklist: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    checklist: state.checklist
})

export default connect(
    mapStateToProps,
    {
        getChecklists,
        getChecklistById
    })(Checklist)