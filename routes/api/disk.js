const express = require('express')
const router = express.Router()
const si = require('systeminformation')

// @route    GET api/storage
// @desc     get all storage
// @access   Public
router.get('/:path', async (req, res) => {
    try {
        const data = await si.fsSize()
        const path = req.params.path
        const filter = data.filter(item => item.fs === path)
        
        res.send(filter)
    } catch (err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

router.get('/', async (req, res) => {
    try {
        const data = await si.fsSize()

        res.send(data)
    } catch (err){
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

module.exports = router