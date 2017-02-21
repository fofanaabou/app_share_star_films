var express = require('express');
var path = require('path');
var routes = require('./routes');
var app = express();

//Templates engine
app.set('view engine','ejs');

//Middlewards
app.use(express.static(path.join(__dirname, 'public')));



//Routes
//home
app.get('/', routes.home);

// movie_single
app.get('/star_wars_episode/:episode_number?', routes.movie_single);
//Not found
app.get('*', routes.notFound);

app.listen(2020, function () {
    console.log("Star wars on localhost:2020")
});