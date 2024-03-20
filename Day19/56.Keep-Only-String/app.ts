//inilitialize mix array with different typeof data.
const mix:any[]=[5,'Laptop','Camera','Smartphone',25,false]
//Filter out only the string element.
const string = mix.filter(words => typeof words ==='string')

//Output the filtered string
   console.log(string)