//100 days Coding challenge:Day37

const Mark:number = 440;
//Check the grade according to this grading system.
if(Mark >= 595 &&  Mark <= 679){
   console.log(`Grade: "A" `)    
}
else if(Mark >= 510 &&  Mark <= 594){
    console.log(`Grade: "B" `)    
 }
 else if(Mark >= 425 &&  Mark <= 509){
    console.log(`Grade: "C" `)    
 }
 else if(Mark >= 340 &&  Mark <= 424){
    console.log(`Grade: "D" `)  
    console.log(Mark);  
 }
else if(Mark === 340){
    console.log(`Grade: "E" `)    
 }else{
    console.log("Fail")
 }
 

