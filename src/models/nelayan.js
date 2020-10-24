const mongoose = require('mangoose');
const validator = require('validator');

const Nelayan = mongoose.model('Nelayan', {
    kode_nelayan: {
        type: String,
        required: true,
    }, 
    nama_nelayan: {
        type: String,
        trim: true
    },
    kabupaten: {
        type: String,
        required: true
    },
    distrik: {
        type: String,
        required: true
    },
    kampung: {
        type: String,
        required: true
    },
    status: {
        type: String,
    },
    kepemilikan_perahu: {
        type: String,
    },   
    tgl_bergabung: {
        type: Date,
        default: date.now(),
        select: false
    },
    foto: [String],
})