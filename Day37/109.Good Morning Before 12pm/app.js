//Coding Challenge:Day37
var currentDate = new Date();
var hours = currentDate.getHours();
var minuts = currentDate.getMinutes();
var time = "It's time ".concat(hours, ":").concat(minuts);
if (hours < 12) {
    console.log("Good morning ");
}
else {
    console.log(time);
}
