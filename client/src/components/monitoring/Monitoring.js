import React, { useEffect } from 'react'
import MonitoringCard from './MonitoringCard'
import MonitoringCardItem from './MonitoringCardItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getSavedDisk, getMappingDisk } from '../../actions/disk'

const Monitoring = ({ getSavedDisk, getMappingDisk, disk: { savedDisk, mappingDisk } }) => {

    useEffect(() => {
        getSavedDisk()
        getMappingDisk()
    }, [getSavedDisk, getMappingDisk, mappingDisk])

    return (
        <>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 w-full'>
                {
                    savedDisk && savedDisk.map((item, index) => {
                        return (
                            <MonitoringCard key={index} data={item}>
                                {
                                    mappingDisk && mappingDisk.filter(filterdisk => filterdisk.mount === `${item.path}:`)
                                        .map((item, index) => {
                                            return (
                                                    <MonitoringCardItem key={index} data={item} />
                                                )
                                            }
                                        )
                                }
                            </MonitoringCard>
                        )
                    })
                }
                    
            </div>
        </>
    )
}

Monitoring.propTypes = {
    getMappingDisk: PropTypes.func.isRequired,
    disk: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    disk: state.disk
})

export default connect(mapStateToProps, { getMappingDisk, getSavedDisk })(Monitoring)