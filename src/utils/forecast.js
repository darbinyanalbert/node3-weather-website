const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/f93c63369187e9cf54e9ebc3fc301a21/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out.The high today is ' +  body.daily.data[0].temperatureHigh + '  There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast
