//Define an interface for student.
interface Student{
    name:string; //Name of the student.
    age:number;  //Age of the student.
    class:string[]; //Array of classes the student taking.
}
//Create an object of student.
const student: Student = {

    name:"Adil",  //Assigning name property 
    age: 30,      //Assigning age property
    class: ["Physics","Mathematics","Chemistry"] //Assigning classes property the student taking

}
//Output the student Object.
console.log(student)
