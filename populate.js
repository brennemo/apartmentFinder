var Apartment = require('./app/models/apartments');
var mongoose = require('mongoose');

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var createApartments = function createApartments() {
    var streets = ['Cedar', 'Lake', 'Main', 'Maple', 'Park', '1st', '2nd', '3rd', '4th', '5th'];
    var apts = [];

    for (var i = 0; i < 10; i++) {
        var imgIdx = i % 3 + 1;
        var addr = getRandomIntInclusive(100, 999)+ ' ' + streets[i] + (i % 2 == 0 ? ' Ave' : ' St');
        var price = (getRandomIntInclusive(12, 35) * 100);
        apts[i] = new Apartment({ address: addr, 
                                 price: price, 
                                 bedrooms: getRandomIntInclusive(0, 4), 
                                 pets: getRandomIntInclusive(0, 1), 
                                 laundry: true, 
                                 dishwasher: getRandomIntInclusive(0, 1),
                                 photo: 'img/placeholder'+ imgIdx + '.png' 
                                });

        apts[i].save(function (err) {
            if (err) return console.error(err);
        });
    }
};

module.exports = {
    createApartments : createApartments
};