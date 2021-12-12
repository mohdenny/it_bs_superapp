import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllDisk, getDiskSpace } from '../../actions/disk'

const data = [
    { 'path': 'E', 'label': 'data' },
    { 'path': 'C', 'label': 'system' },
]

const Dashboard = ({ getAllDisk, getDiskSpace, disk: { disk, disks } }) => {

    useEffect(() => {
        getAllDisk()
        getDiskSpace('C')
    }, [getAllDisk, getDiskSpace])

    return (
        <>
            <div className='container mx-auto'>
                <div className='flex flex-row items-center justify-center space-x-4 px-4 py-2'>
                    {
                        data && data.map((item, index) => {
                            console.log(disks.filter(filterdisk => filterdisk.mount === `${item.path}:`))
                            return (
                                <div key={index} className='bg-blue-300 border-2 border-blue-300 rounded-xl'>
                                    <div className='px-4 py-2'>
                                        <p>{item.label}</p>
                                    </div>
                                    {
                                        disks && disks.filter(filterdisk => filterdisk.mount === `${item.path}:`)
                                            .map((item, index) => {
                                                return (
                                                        <div key={index} className='bg-blue-200 rounded-b-xl px-4 py-2'>
                                                            <p>{`Size: ${item.size}`}</p>
                                                            <p>{`Used: ${item.used}`}</p>
                                                            <p>{`Free: ${item.available}`}</p>
                                                            <p>{`Use: ${item.use}%`}</p>
                                                        </div>
                                                    )
                                                }
                                            )
                                    }
                                </div>
                            )
                        })
                    }
                        
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