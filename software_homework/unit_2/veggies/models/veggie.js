const mongoose = require('mongoose')

// Make A Schema
const veggieSchema = new mongoose.Schema({
    name: { type: String, required: true},
    color: { type: String, required: true},
    readyToEat: Boolean
})


// Make A Model From The Schema

const Veggie = mongoose.model('Veggie', veggieSchema)

// Export The Model For Use  In The App

module.exports = Veggie