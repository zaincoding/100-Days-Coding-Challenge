//Define a function to check that the number is divisible or not.
function quotient(divident:number, divisor:number){
   //Calculate the remainder.
   const remainder:number = divident % divisor
//check if the remainder is 0.
//if it 0 run the if code,otherwise run the else code.
   if(remainder === 0){
    console.log("This number is divisible.")
   }else{
    console.log("This number is not divisible.")
   }

}
//Output the result to the console.
quotient(6,2)
quotient(6,3)
quotient(5,2)

