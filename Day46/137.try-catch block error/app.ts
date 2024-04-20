//Coding Challenge:Day46

 // The 'try' block is used to enclose the code that might throw an error.
try {
    // If an error occurs within this block, the execution will jump to the 'catch' block.
     let name = myFunction()
      console.log(`Name:`, name);
    
}// The 'catch' block is executed if an error occurs within the 'try' block. 
catch (error){
  
    console.error("Error occured:", error.message)
}
