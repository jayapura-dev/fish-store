const express = require('express')
const Distrik = require('../models/distrik')
const router = new express.Router()

router.post('/distrik', async (req, res) => {
    const distrik = new Distrik(req.body)

    try {
        await distrik.save()
        res.status(201).send(distrik)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/distrik', async (req, res) => {
    const result = await Distrik.find({})
    const length = await Distrik.count()

    try {
        res.status(200).send({
            length, 
            result,
            
        })
    } catch (e) {
        res.status(500).send(e)
    }
})

module.exports = router