// app/models/apartments.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var ApartmentSchema = new Schema({
    address: String,
    price: Number,
    photo: { type: String, default: 'img/placeholder1.png' },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Apartment', ApartmentSchema);


