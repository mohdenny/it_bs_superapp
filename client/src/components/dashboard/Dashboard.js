import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllDisk, getDiskSpace } from '../../actions/disk'

const data = [
    { 'path': 'D', 'label': 'data' },
    { 'path': 'C', 'label': 'system' },
]

const Dashboard = ({ getAllDisk, getDiskSpace, disk: { disk, disks } }) => {

    useEffect(() => {
        getAllDisk()
        getDiskSpace('C')
    }, [getAllDisk, getDiskSpace, disks])

    const convertByte = (data) => {
        console.log(toString(data).length)
    }

    return (
        <>
            <div className='container mx-auto'>
                <div className='flex flex-row items-center justify-center space-x-4 px-4 py-2'>
                    {
                        data && data.map((item, index) => {
                            console.log(disks.filter(filterdisk => filterdisk.mount === `${item.path}:`))
                            return (
                                <div key={index}>
                                    <div className='px-4 py-2 border-2 rounded-t-xl'>
                                        <p className='uppercase'>{item.label}</p>
                                    </div>
                                    {
                                        disks && disks.filter(filterdisk => filterdisk.mount === `${item.path}:`)
                                            .map((item, index) => {
                                                return (
                                                        <div key={index} className='flex flex-row border-2 px-4 py-2 rounded-b-xl space-x-4'>
                                                            <div className='flex flex-row space-x-2'>
                                                                <div>    
                                                                    <p>Size:</p>
                                                                    <p>Used:</p>
                                                                    <p>Free:</p>
                                                                </div>
                                                                <div> 
                                                                    <p>{item.size}</p>   
                                                                    <p>{convertByte(item.size)}</p>   
                                                                    <p>{item.used}</p>
                                                                    <p>{item.available}</p>
                                                                </div>
                                                            </div>
                                                            <div className='transform -translate-y-11 flex border-2 overflow-hidden w-20 h-auto rounded-full'> 
                                                                <div className='absolute z-20 bg-white h-1/2 w-full'></div>   
                                                                <div className='z-30 px-2 flex items-center h-full w-full justify-center'>
                                                                    <p className='font-bold' >{`${item.use}%`}</p>
                                                                </div>
                                                                <div className='absolute z-10 h-full bg-blue-400 w-full'></div>  
                                                            </div>
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