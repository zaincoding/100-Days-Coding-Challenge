//Declare 'dice' variable and assigned value
const dice:number = Math.floor(Math.random() *6) +1
//If the 'dice' value is greater than 5 run the if condition
//otherwise run the else condition.
if(dice > 5){
console.log(dice+": You meet the condition.");
} else{
    console.log(`${dice}: The condition is not met.\n Try again.`)
}
