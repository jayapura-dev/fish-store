const express = require('express')
const router = new express.Router()

router.get('/login', (req, res) => {
    return res.render('auth/login', {
        title: 'FISH-STORE | LogIn'
    })
})

module.exports = router