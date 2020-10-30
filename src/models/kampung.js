const mongoose = require('mongoose');

const kampungSchema = new mongoose.Schema({
    kode_kampung: {
        type: String,
        required: [true, 'Masukan Kode Wilayah Kampung']
    },
    distrik: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'distrik tidak boleh kosong']
    },
    nama_kampung: {
        type: String,
        required: [true, 'nama kampung tidak boleh kosong']
    }
})

const Kampung = mongoose.model('Kampung', kampungSchema)

module.exports = Kampung