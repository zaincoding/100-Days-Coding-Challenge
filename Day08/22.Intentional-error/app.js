//an array list is created 
var indexError = ['Car', 'Bike', 'Bicycle'];
//index number out of bond.
var indexnumber = indexError[5];
//print the value of indexOutBond.
console.log(indexnumber);
//Higer index value assigned to generate error.
var indextoAccess = 5;
//if the array length is greater than the indextoAccess value run the block code.
if (indextoAccess < indexError.length) {
    console.log(indexError[indextoAccess]);
} //if the condition false run this blcok code.
else {
    console.log("Index is out of bond.");
}
