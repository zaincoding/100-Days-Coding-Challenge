//inilitialize mix array with different typeof data.
var mix = [5, 'Laptop', 'Camera', 'Smartphone', 25, false];
//Filter out only the string element.
var string = mix.filter(function (words) { return typeof words === 'string'; });
//Output the filtered string
console.log(string);
