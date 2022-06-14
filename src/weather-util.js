const request = require('request')
const getWeather = (loc, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=80beb4ffef833c1f2b28a43d9ba1b229&query=' + encodeURIComponent(loc)
    request({ url, json: true }, (error, response) => {
        if (error) {
            callback({ error: 'Unable to connect' }, undefined)
        } else if (response.body.error) {
            callback({ error: 'No data for this location available' }, undefined)
        } else {
            callback(undefined, {
                city: response.body.location.name,
                country: response.body.location.country,
                temp: response.body.current.temperature,
                feelslike: response.body.current.feelslike
            })
        }
    })
}
module.exports = getWeather