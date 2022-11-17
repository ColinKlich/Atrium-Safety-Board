const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');

input = 'P:/_AppData/ShrdApps/FWI_Media/HR_Safety/Atrium Walk-in/data.csv';

app.set('views', './public/views');
app.set('view engine', 'pug');

app.use(express.static('./public'));

app.get('/', function (req, res) {
	let data = fs.readFileSync(input, 'utf8');
	data = data.split(/\r?\n/);
	for (let i in data) {
		data[i] = data[i].split(',');
	}
	
	res.render('main', {
		data: JSON.stringify(data),
	});
});

app.get('*', (req, res, next) => {
	res.status(200).send('Sorry, page not found');
	next();
});

app.listen(port, () => {
	console.log(`Server started at port ${port}`);
});
