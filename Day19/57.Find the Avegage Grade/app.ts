
//initialize grads array
const grads:any[] =[60,65,70,80,90];
//initialize txt variable.
let txt:number=0;
//Loop through grads array.
for(let i=0; i<grads.length; i++){

//summ up and divided by 5 to find out the average number.
txt += grads[i]/5;

}
//out put the average value.
console.log(`Average Grade: ${txt}`)





 