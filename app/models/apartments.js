// app/models/apartments.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

var ApartmentSchema = new Schema({
    address: String,
    price: Number,
    bedrooms: { type: Number, default: 1 },
    pets: { type: Boolean, default: true },
    laundry: { type: Boolean, default: false },
    dishwasher: { type: Boolean, default: false },
    photo: { type: String, default: 'img/placeholder1.png' },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Apartment', ApartmentSchema);


