var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('server/routes');

// Set Port
var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/src/')); 

// Rendering configuration
// app.set('views', __dirname + '/src/views');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');

app.use(bodyParser.json());

routes(app);

app.listen(PORT, function() {
	console.log('Server running on ' + PORT)
});