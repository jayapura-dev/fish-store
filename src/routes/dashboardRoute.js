const express = require('express')
const router = new express.Router()

router.get('/', (req, res) => {
    return res.render('overview', {
        title: 'Dashboard'
    })
})

module.exports = router