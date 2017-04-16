/* 
// app/routes.js

// grab the nerd model we just created
var Apartments = require('./models/apartments');

//make some objects ... not sure where to put this 
//var apt1 = new Apartments({address: '1234 Main St', price: 2000, photo: 'img/placeholder.png'});

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/apartments', function(req, res) {
            // use mongoose to get all apartments
            Apartments.find(function(err, apartments) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.send(apartments); // return all nerds in JSON format
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });

    };
*/