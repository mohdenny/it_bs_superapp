import React, { useEffect } from 'react'
import Card from '../monitoring/Card'
import CardItem from '../monitoring/CardItem'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllDisk, getDiskSpace } from '../../actions/disk'

const data = [
    { 'path': 'Z', 'ip': '192.168.150.214', 'label': 'broadcast'},
    { 'path': 'Y', 'ip': '192.168.150.213', 'label': 'visualinspector'},
    { 'path': 'X', 'ip': '172.16.45.225', 'label': 'ftp'},
    { 'path': 'W', 'ip': '172.16.45.225', 'label': 'watchdalet'},
    { 'path': 'V', 'ip': '172.16.40.237', 'label': 'export'},
    { 'path': 'U', 'ip': '172.16.45.22', 'label': 'brio01'},
    { 'path': 'T', 'ip': '172.16.45.23', 'label': 'brio02'},
    { 'path': 'S', 'ip': '172.16.45.24', 'label': 'brio03'},
    { 'path': 'R', 'ip': '172.16.40.158', 'label': 'tobeqc'},
]

const Monitoring = ({ getAllDisk, getDiskSpace, disk: { disk, disks } }) => {

    useEffect(() => {
        getAllDisk()
        // getDiskSpace('C')
    }, [getAllDisk, getDiskSpace, disks])

    return (
        <>
            <div className=''>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4'>
                    {
                        data && data.map((item, index) => {
                            return (
                                <Card key={index} data={item}>
                                    {
                                        disks && disks.filter(filterdisk => filterdisk.mount === `${item.path}:`)
                                            .map((item, index) => {
                                                return (
                                                        <CardItem key={index} data={item} />
                                                    )
                                                }
                                            )
                                    }
                                </Card>
                            )
                        })
                    }
                        
                </div>
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