const path = require('path');
const express = require('express');
const hbs = require('hbs');

require('./db/mongoose')

// Routes
const distrikRoutes = require('./routes/distrikRoute')
const kabupatenRoutes = require('./routes/kabupatenRoute')
const DashboardRoutes = require('./routes/dashboardRoute')
const AuthRoutes = require('./routes/authRoute')
const KampungRoutes = require('./routes/kampungRoute')

// Initilize express frame
const app = express()

// Port Config
const port = process.env.PORT || 8000

// Set Static assets
const public = path.join(__dirname, '../public')
const viewPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Set View Path
app.set('view engine', 'hbs')
app.set('views', viewPath)

// set View parent Page
hbs.registerPartials(partialsPath)

app.use(express.static(public))
app.use(express.json())

app.use(
    distrikRoutes,
    kabupatenRoutes,
    DashboardRoutes,
    AuthRoutes,
    KampungRoutes
)

// app.use(distrikRoutes)
// app.use(kabupatenRoutes)
// app.use(DashboardRoutes)
// app.use(AuthRoutes)

app.listen(port, () => {
    console.log(`App Running on Port ${port}...`);
})




