import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getDiskSpace } from '../../actions/storage'

// const Dashboard = ({ getDiskSpace }) => {
const Dashboard = ({ getDiskSpace, disk: { disk } }) => {

    useEffect(() => {
        getDiskSpace('C')
    }, [getDiskSpace])

    return (
        <>
            { true && <p className="text-red-600">ok</p>}
        </>
    )
}

Dashboard.propTypes = {
    getDiskSpace: PropTypes.func.isRequired,
    // disks: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    disk: state.disk
})

export default connect(mapStateToProps, { getDiskSpace })(Dashboard)
// export default connect(null, { getDiskSpace })(Dashboard)