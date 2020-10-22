const mongoose = require('mongoose');

const app = require('./app');

mongoose
    .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB Connected!!'));

const port = process.env.PORT || 5000;
    app.listen(port, () => {
    console.log(`App Running on Port ${port}...`);
});