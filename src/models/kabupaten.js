const mongoose = require('mongoose')

const kabupatenSchema = new mongoose.Schema({
    kode: {
        type: String,
        required: [true, 'Masukan Kode Wilayah']
    },
    nama_kab: {
        type: String,
        required: [true, 'Masukan Nama Kabupaten'],
        trim: true
    }
})

kabupatenSchema.virtual('distriks', {
    ref: 'Distrik',
    localField: '_id',
    foreignField: 'kabupaten'
})

const Kabupaten = mongoose.model('Kabupaten', kabupatenSchema)

module.exports = Kabupaten