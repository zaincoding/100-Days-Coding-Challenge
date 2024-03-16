//define array containing number 1 to 9
const Ordinals:number[] =[1,2,3,4,5,6,7,8,9];
//Loop through array
for(let i=0; i<Ordinals.length; i++){
//check the value of each number in the array
if(Ordinals[i] === 1){
//print the number with ordinal 'st' if it is 1
    console.log(`${Ordinals[i]}st`)
}
else if(Ordinals[i] === 2){
//print the number with oridinal 'nd' if it is 2
    console.log(`${Ordinals[i]}nd`)
}
else if(Ordinals[i] === 3){
//print the number with oridinal 'rd' if it is 3
    console.log(`${Ordinals[i]}rd`)
}else{
//print the rest of the number with ordinal 'th' 
    console.log(`${Ordinals[i]}th`)
}

}