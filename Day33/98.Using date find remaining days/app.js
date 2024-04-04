var date = new Date('2024-12-31');
var currentDate = new Date();
var timeLeft = date.getTime() - currentDate.getTime();
var dayleft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
console.log(dayleft);
