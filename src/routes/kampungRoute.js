const express = require('express')
const Kampung = require('../models/kampung')
const router = new express.Router()

router.post('/kampung', async (req, res) => {
    const kampung = new Kampung(req.body)

    try {
        await kampung.save()
        res.status(201).send(kampung)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router