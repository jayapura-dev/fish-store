const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 5000

const public = path.join(__dirname, './public/backend/');
const viewPath = path.join(__dirname, './templates/views');
const partialsPath = path.join(__dirname, './templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

app.use(express.static(public));

app.get('', (req, res) => {
    res.render('overview', {
        title: 'FS | Overview'
    })
})

// Server RUN PORT
app.listen(port, () => {
  console.log(`App Running on Port ${port}...`);
});




