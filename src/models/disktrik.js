const mongoose = require('mangoose');
const validator = require('validator');

const Distrik = mongoose.model('Distrik', {
    kode_distrik: {
        type: String,
        required: [true, 'Masukan Kode Wilayah Distrik'],
        maxlength: 4
        minlength: 2
    },
    kode_kabupaten: {
        type: String,
        required: [true, 'Masukan Kode Kabupaten'],
        maxlength: 4
        minlength: 2
    },
    nama_distrik: {
        type: String,
        required: [true, 'Masukan Nama Distrik'],
        trim: true
    }
})

module.exports = Distrik