const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/fish-store', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})