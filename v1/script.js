const today = new Date();

var data = document.getElementById('data');

pic = './pngs/green.png';
numlost = 0;
numincidents = 0;

box = new Array(30);
for (let i = 0; i <= 30; i++) {
	box[i] = document.getElementById('box' + (i + 1));
}

if (today.getDate() !== 31) {
	box[30].style.border = 'black';
}

for (let i = 0; i <= 30; i++) {
	if (i < today.getDate() - 1) {
		box[i].style.backgroundColor = 'green';
	}
}

LastDayTimeLost = new Date('08/08/22');
for (let i = 0; i < data.length; i++) {
	const tempDate = new Date(data[i][0]);

	if (tempDate.getMonth() == today.getMonth() - 1) {
		numincidents++;
	} else if (tempDate.getMonth() == today.getMonth()) {
		if (data[i][0] == 'yes') {
			box[tempDate.getDate() - 1].style.backgroundColor = 'red';
		}
	}

	if (tempDate > LastDayTimeLost && data[i][1] == 'yes') {
		LastDayTimeLost = tempDate;
	}
	if (tempDate == today) {
	}
}
const DayinMilli = 86400000;
numlost = parseInt((today - LastDayTimeLost) / DayinMilli);

if (numlost == 0) {
	pic = './pngs/red.png';
	temp = today.getDate() - 1;
	box[temp].style.backgroundColor = 'red';
} else {
	pic = './pngs/green.png';
}
document.getElementById('stoplight').src = pic;

Date = new Date().toDateString();
document.getElementById('date').innerHTML = Date;
toString(numlost);
document.getElementById('numlost').innerHTML = numlost;
toString(numincidents);
document.getElementById('numincidents').innerHTML = numincidents;
