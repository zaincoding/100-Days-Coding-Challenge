//Call the 'Function Declaration' before the declaration.
console.log(funDec(5))//accessible 
//Function Declaration is accessible any where with in the scope.
function funDec(Square:number){
    return Square**2
}
let sq:number = 5;
//Log the function declaration to the console
console.log(funDec(sq))

//'Function expression' before the declaration.
console.log(funExp(3))//generate error not accessible.
//Function expression is not accessible before the declaration
const funExp = function funExp(cube:number){
    return  cube**3
}

let cubeNum:number = 3;
//Log the function expression to the console.
console.log(funExp(cubeNum))

