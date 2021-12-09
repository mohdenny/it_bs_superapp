import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllDisk, getDiskSpace } from '../../actions/disk'

const Dashboard = ({ getAllDisk, getDiskSpace, disk: { disk, disks } }) => {

    useEffect(() => {
        getAllDisk()
        getDiskSpace('C')
    }, [getAllDisk, getDiskSpace])

    return (
        <>
            <div className='container mx-auto'>
                <div className='flex flex-row items-center justify-center space-x-4 px-4 py-2'>
                    { disks && disks.map((item, index) => {
                        return (
                                <div key={index} className='border-2 border-blue-300 bg-blue-200 rounded-xl px-4 py-2'>
                                    <p>{`${item.fs}`}</p>
                                    <p>{`Type: ${item.type}`}</p>
                                    <p>{`Size: ${item.size}`}</p>
                                    <p>{`Used: ${item.used}`}</p>
                                    <p>{`Available: ${item.available}`}</p>
                                    <p>{`Use: ${item.use}%`}</p>
                                </div>
                            )
                        }
                    )}
                </div>
            </div>
        </>
    )
}

Dashboard.propTypes = {
    getDiskSpace: PropTypes.func.isRequired,
    disk: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    disk: state.disk,
})

export default connect(mapStateToProps, { getDiskSpace, getAllDisk })(Dashboard)