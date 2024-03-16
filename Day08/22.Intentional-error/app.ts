//an array list is created 
const indexError:string[] = ['Car','Bike','Bicycle'];
//index number out of bond.
 const  indexnumber = indexError[5] 
//print the value of indexOutBond.
 console.log(indexnumber);
//Higer index value assigned to generate error.
const indextoAccess = 5;
//if the array length is greater than the indextoAccess value run the block code.
if(indextoAccess < indexError.length){
    console.log(indexError[indextoAccess])
}//if the condition false run this blcok code.
else{
    console.log("Index is out of bond.")
}
