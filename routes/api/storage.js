const express = require('express')
const router = express.Router()
const checkDiskSpace = require('check-disk-space').default

// @route    GET api/storage
// @desc     get all storage
// @access   Public
router.get('/:disk', async (req, res) => {
    checkDiskSpace(`${req.params.disk}:`)
        .then(diskSpace => {
            res.send(diskSpace)
        })
        .catch(err => {
            console.error(err.message)
            res.status(500).send('Server Error')
        })
})

module.exports = router