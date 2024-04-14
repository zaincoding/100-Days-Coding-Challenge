//Coding Challenge:Day43

//Declaration of traditional function
function trFunction(){
    //log the value of 'this'
    console.log(this)
}
//Call the 'trFunction' with a context object
trFunction.call({Function: 'Traditional'})
//Declaration of arrow Function
const arrowFun = () =>{
    //Log the value of 'this'
    console.log(this)
}
//Attempt to call the 'arrowFun' with context object
arrowFun.call({Function: 'Arrow'})