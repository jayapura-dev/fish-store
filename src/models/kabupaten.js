const mongoose = require('mangoose');
const validator = require('validator');

const Kabupaten = mongoose.model('Kabupaten', {
    kode: {
        type: String,
        required: [true, 'Masukan Kode Wilayah'],
        maxlength: 4
        minlength: 2
    },
    nama_kab: {
        type: String,
        required: [true, 'Masukan Nama Kabupaten'],
        trim: true
    }
})

module.exports = Kabupaten