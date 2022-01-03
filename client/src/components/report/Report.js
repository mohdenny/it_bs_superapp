import React, { useState, useEffect } from 'react'
import ReportBar from './ReportBar'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPrograms } from '../../actions/report'
import ProgramReportList from './ProgramReportList'

const Report = ({ getPrograms, report: { programs } }) => {
    const [ isActiveTab, setIsActiveTab ] = useState('program')

    useEffect(() => {
        
        if(isActiveTab === 'program'){
            getPrograms()
        }else{
            return null
        }

    }, [getPrograms, isActiveTab])

    return (
        <div className='space-y-4 h-full w-full'>
            <ReportBar 
                isActiveTab={isActiveTab}
                setIsActiveTab={setIsActiveTab}
            />
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider "
                                        >
                                            Program
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Onduty
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                        >
                                            Created
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Action</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {
                                        isActiveTab === 'program' && <ProgramReportList programs={programs} />
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Report.propTypes = {
    getPrograms: PropTypes.func.isRequired,
    report: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    report: state.report
})

export default connect(mapStateToProps, { getPrograms })(Report)