const express = require('express')
const Kabupaten = require('../models/kabupaten')
const router = new express.Router()

router.post('/kabupaten', async (req, res) => {
    const kabupaten = new Kabupaten(req.body)

    try {
        await kabupaten.save()
        res.status(201).send(kabupaten)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/kabupaten', async (req, res) => {
    const kabupaten = await Kabupaten.find({})

    try {
        res.status(200).send(kabupaten)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router