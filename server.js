var express    = require('express'),
	bodyParser = require('body-parser'),
	app        = express();


var names = [];

app.use(bodyParser.urlencoded({
	extended: true
}));

app.engine('jade', require('jade').__express);

app.get('/', function(req, res) {
	res.render('index.jade', {
		names: names
	});
});

app.post('/', function(req, res) {
	names.push(req.body.name);
	res.redirect('/');
});

app.listen(3000);