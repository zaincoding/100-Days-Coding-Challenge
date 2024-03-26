//let is a block scope variable if it is defined inside the blcoks.
//then it is not accessible outside the blocks.


function loop(){
for(let num = 0; num<5; num++){

   console.log(num)
}

}
//cannot find name 'num'
console.log(num)

