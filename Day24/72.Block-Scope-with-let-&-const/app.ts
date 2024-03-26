
function BlockScope(){

    let personName:string = "Kabir";

    const hairColor:string = "Black"

}

//let and const are block scope variables it means that if they defined inside the blcoks{}
 //then they are not accessible outside the blocks.

//cannot find  name 'personname'. error
console.log(personName);

//cannot find name 'hairColor'. error
console.log(hairColor);