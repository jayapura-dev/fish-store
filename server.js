const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(() => console.log('DB Connected!!'));

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`App Running on Port ${port}...`);
});