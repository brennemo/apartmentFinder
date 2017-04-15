// app/models/apartments.js
// grab the mongoose module
var mongoose = require('mongoose');

// define model
module.exports = mongoose.model('Apartment', {
    name: String,
  price: Number,
  date_available: { type: Date, default: Date.now }
});
