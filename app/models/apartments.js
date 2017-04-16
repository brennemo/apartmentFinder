// app/models/apartments.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

// define model
module.exports = mongoose.model('Apartments', {
    address: String,
    price: Number,
    photo: String, 
    date: { type: Date, default: Date.now }
});

