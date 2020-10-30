const mongoose = require('mongoose')

const distrikSchema = new mongoose.Schema({
    kode_distrik: {
        type: String,
        required: [true, 'Masukan Kode Wilayah Distrik']
    },
    kabupaten: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'kabupaten',
        required: [true, 'Kabupaten Harus diisi.'],
    },
    nama_distrik: {
        type: String,
        required: [true, 'Masukan Nama Distrik'],
        trim: true
    }
})

distrikSchema.virtual('kampungs', {
    ref: 'Kampung',
    localField: '_id',
    foreignField: 'distrik'
})

const Distrik = mongoose.model('Distrik', distrikSchema)

module.exports = Distrik