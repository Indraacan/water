const mongoose = require('mongoose')
const Schema = mongoose.Schema

const monitorSchema = new Schema({
    pH: {
        type: Number,
        required: true
    },
    turbidity: {
        type: Number,
        required: true
    },
    TDS: {
        type: Number,
        required: true
    },
    tempCelcius: {
        type: Number,
        required: true
    },
    tempFahren: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('monitor', monitorSchema)
