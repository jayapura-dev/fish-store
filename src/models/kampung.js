const mongoose = require('mangoose');
const validator = require('validator');

const Kampung = mongoose.model('Kampung', {
    kode_kampung: {
        type: String,
        required: [true, 'Masukan Kode Wilayah Kampung'],
        maxlength: 4
        minlength: 2
    },
    kode_distrik: {
        type: String,
        required: [true, 'Masukan Kode Distrik'],
        maxlength: 4
        minlength: 2
    },
    nama_kampung: {
        type: String,
        required: [true, 'Masukan Nama Kampung'],
        trim: true
    }
})

module.exports = Distrik