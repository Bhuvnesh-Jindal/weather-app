const express = require('express')
const app = express()
const path = require('path')
const hbs = require('hbs')
const util = require('./weather-util')

app.use(express.static(path.join(__dirname, '../public')))
    //app.set('views', path.join(__dirname, '../views'));

//hbs.registerPartials(path.join(__dirname, '../partials'))

//app.set('view engine', 'hbs')
const port = process.env.port || 3000
app.get('', (req, res) => {
    res.send('index')
})

app.get('/weather', (req, res) => {
    if (!req.query.loc) {
        return res.send({
            error: 'Please specify the location'
        })
    }
    const loc = req.query.loc
    util(loc, (error, data) => {
        if (error) {
            res.send(error)
        }
        res.send(data)
    })
})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(port, () => {
    console.log('Server is running on port ' + port)
})