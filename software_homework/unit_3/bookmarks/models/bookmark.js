const { Schema, model } = require('mongoose')

const bookmarkSchema = new Schema({
    title: { type: String, requuired: true },
    url: { type: String, required: true }
}, {
    timestamps: true
})

module.exports = model('Bookmark', bookmarkSchema )