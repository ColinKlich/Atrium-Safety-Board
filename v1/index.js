const express = require('express');
const fs = require('fs');
const url = require('url');
const path = require('path');

const app = new express();
app.set('view engine', 'pug');
//app.set('public', path.join(__dirname, 'public'));

const Overview = __dirname + '/index.html';

app.use(express.static(`${__dirname}/public`));

app.get('/', function (req, res) {
	res.sendFile(Overview);
	//res.sendFile(path.join(__dirname, './data.csv'));
});

app.listen(8000, '127.0.0.1', () => {
	console.log('Listening to requests on port 8000');
});
