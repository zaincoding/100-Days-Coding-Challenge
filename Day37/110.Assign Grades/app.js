//100 days Coding challenge:Day37
[340, 424, 425, 509, 510, 594, 595, 679];
//Markss A,B,C,D
var Marks = 440;
if (Marks >= 595 && Marks <= 679) {
    console.log("Grade: \"A\" ");
}
else if (Marks >= 510 && Marks <= 594) {
    console.log("Grade: \"B\" ");
}
else if (Marks >= 425 && Marks <= 509) {
    console.log("Grade: \"C\" ");
}
else if (Marks >= 340 && Marks <= 424) {
    console.log("Grade: \"D\" ");
    console.log(Marks);
}
else if (Marks === 340) {
    console.log("Grade: \"E\" ");
}
else {
    console.log("Fail");
}
