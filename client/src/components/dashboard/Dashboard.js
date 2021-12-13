import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { connect } from 'react-redux'
import { getAllDisk, getDiskSpace } from '../../actions/disk'

const data = [
    { 'path': 'D', 'label': 'data' },
    { 'path': 'C', 'label': 'system' },
]

const diskTest = [
    {
        "fs":"C:",
        "type":"NTFS",
        "size":"134642397184",
        "used":"131712499712",
        "available":"2929897472",
        "use":"80",
        "mount":"C:"
    }
]

const Dashboard = ({ getAllDisk, getDiskSpace, disk: { disk, disks } }) => {

    useEffect(() => {
        getAllDisk()
        getDiskSpace('C')
    }, [getAllDisk, getDiskSpace, disks])

    const convertByte = (data) => {
        const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
        let l = 0 
        let n = parseInt(data, 10) || 0

        while(n >=1024 && ++l){
            n = n/1024
        }

        return(n.toFixed(n < 10 && l > 0 ? 1: 0) + ' ' + units[l])
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
                                                                    <p>{convertByte(item.size)}</p>   
                                                                    <p>{convertByte(item.used)}</p>
                                                                    <p>{convertByte(item.available)}</p>
                                                                </div>
                                                            </div>
                                                            <div className='transform -translate-y-11 flex border-2 overflow-hidden w-20 h-auto rounded-full'>     
                                                                <div className='z-30 px-2 flex items-center h-full w-full justify-center'>
                                                                    <p className={classnames('font-bold', { 'text-white' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('60%') })} >{`${Math.ceil(item.use)}%`}</p>
                                                                </div>
                                                                <div className={classnames('absolute z-20 bg-white w-full',
                                                                    { 'h-100%' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('0%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('0%') },
                                                                    { 'h-90%' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('0%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('10%') },
                                                                    { 'h-80%' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('10%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('20%') },
                                                                    { 'h-70%' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('20%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('30%') },
                                                                    { 'h-60%' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('30%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('40%') },
                                                                    { 'h-50%' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('40%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('50%') },
                                                                    { 'h-40%' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('50%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('60%') },
                                                                    { 'h-30%' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('60%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('70%') },
                                                                    { 'h-20%' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('70%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('80%') },
                                                                    { 'h-10%' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('80%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('90%') },
                                                                    { 'h-0%' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('90%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('99%') },
                                                                    { 'h-0%' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('99%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('100%') },
                                                                )}></div>
                                                                <div className={classnames('absolute z-10 h-full w-full', 
                                                                    { 'bg-red-600' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('79%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('100%') },
                                                                    { 'bg-blue-600' : Math.ceil(parseInt(convertByte(item.use))) >= parseInt('0%') && Math.ceil(parseInt(convertByte(item.use))) <= parseInt('79%') },
                                                                )}></div>  
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