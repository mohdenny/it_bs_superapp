import React, { useEffect } from 'react'
import { dataDisk } from '../../utils/staticData'
import MonitoringCard from './MonitoringCard'
import MonitoringCardItem from './MonitoringCardItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllDisk, getDiskSpace } from '../../actions/disk'

const Monitoring = ({ getAllDisk, getDiskSpace, disk: { disk, disks } }) => {

    useEffect(() => {
        getAllDisk()
        // getDiskSpace('C')
    }, [getAllDisk, getDiskSpace, disks])

    return (
        <>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 w-full'>
                {
                    dataDisk && dataDisk.map((item, index) => {
                        return (
                            <MonitoringCard key={index} data={item}>
                                {
                                    disks && disks.filter(filterdisk => filterdisk.mount === `${item.path}:`)
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
    getDiskSpace: PropTypes.func.isRequired,
    disk: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    disk: state.disk,
})

export default connect(mapStateToProps, { getDiskSpace, getAllDisk })(Monitoring)