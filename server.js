const express = require('express');
const cors = require('cors')

// application object using express 
const app = express();
app.use(cors())

// PORT 
const port = process.env.PORT || 3000
// body parser
const bodyParser = require('body-parser');
// routes
const food = require('./routes/food')
const customers = require('./routes/customers')
const auth = require('./routes/auth')


// Init middleware
// app.use(bodyParser.json());


app.use(bodyParser.json({
    limit: '10mb',
    extended: true
}))
app.use(bodyParser.urlencoded({
    limit: '10mb',
    extended: true
}))
app.use(express.json({
    extended: false
}))

// Routes
app.use('/users', customers)
app.use('/auth', auth)
// CRUD
app.use('/blogs', food)
// app.use('/management', management)


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
});

module.exports = app;