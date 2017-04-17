// modules 
var express = require('express');
var app = express();
var mongoose = require('mongoose');
//var Schema = mongoose.Schema; 
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// config files
//var db = require('./config/db');

// port
var port = process.env.PORT || 8080; 


//connect to database (without /config/db.js credentials)
mongoose.connect('mongodb://localhost/test');
var Apartment = require('./app/models/apartments');

// create some apartments ========================================
/*
var apts = [];

for (var i = 0; i < 10; i++) {
    apts[i] = new Apartment({ address: 111+i+' Main St', price: 2000, photo: 'img/placeholder.png' });
    
    apts[i].save(function (err) {
        if (err) return console.error(err);
    });
}
*/

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes ==================================================
//require('./app/routes')(app); // configure our routes
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	//console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// on routes that end in /apartments
// ----------------------------------------------------
router.route('/apartments')

	// create an apartment (accessed at POST http://localhost:8080/apartments)
	.post(function(req, res) {
		
		var apt = new Apartment();	
		apt.name = req.body.name;  
    
		apt.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Apartment created!' });
		});

		
	})

	// get all the apartments (accessed at GET http://localhost:8080/api/apartments)
	.get(function(req, res) {
		Apartment.find(function(err, apts) {
			if (err)
				res.send(err);
            console.log('Get!');
			res.json(apts);
		});
	});

// on routes that end in /apartments/:apt_id
// ----------------------------------------------------
router.route('/apartments/:apt_id')

	// get apt with that id
	.get(function(req, res) {
		Apartment.findById(req.params.apt_id, function(err, apt) {
			if (err)
				res.send(err);
			res.json(apt);
		});
	})

	// update apt with this id
	.put(function(req, res) {
		Apartment.findById(req.params.apt_id, function(err, apt) {

			if (err)
				res.send(err);

			apt.address = req.body.address;
            apt.price = req.body.price;
            
			apt.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Apartment updated!' });
			});

		});
	})

	// delete apt with this id
	.delete(function(req, res) {
		Apartment.remove({
			_id: req.params.apt_id
		}, function(err, apt) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

app.use('/api', router);

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);               

// expose app           
//exports = module.exports = app;        
