var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema; 
var bodyParser = require('body-parser');

//MongoDB Schema 
mongoose.connect('mongodb://localhost/test');

var ApartmentSchema = new Schema({
  name: String,
  price: Number,
  date_available: { type: Date, default: Date.now },
});

//Basic Hello World 
app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})