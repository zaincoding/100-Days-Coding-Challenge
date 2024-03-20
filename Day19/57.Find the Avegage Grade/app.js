//initialize grads array
var grads = [60, 65, 70, 80, 90];
//initialize txt variable.
var txt = 0;
//Loop through grads array.
for (var i = 0; i < grads.length; i++) {
    //summ up and divided by 5 to find out the average number.
    txt += grads[i] / 5;
    console.log(txt);
}
//out put the average value.
//console.log(`Average Grade: ${txt}`)
