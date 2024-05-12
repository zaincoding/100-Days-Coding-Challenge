//Nulish coalescing operator
//The nulish coalescing operator is written as two question makrs ??.
// it treats null and undefined similarly.

// let user;
// alert(user ?? "Anonymous")//Anonymous(user undefined)

// let user = "John";
// alert(user ?? "Anonymous")//John(user is not null/undefined)

/*We’d like to display the user name using one of these variables,
 or show “Anonymous” if all of them are null/undefined. */

//  let firstName = null;
//  let lastName = null;
//  let nickName = "John"

//  alert(firstName ?? lastName ?? nickName ?? "Anonymous")


//Comparison with ||
//The OR || operator can be used in the same way as ??.

//  let firstName = null;
//  let lastName = null;
//  let nickName = "John"

//  alert(firstName || lastName || nickName || "Anonymous")

 /*The important difference between them is that:

|| returns the first truthy value.
?? returns the first defined value.

In other words, || doesn’t distinguish between false, 0, an empty string "" and null/undefined. */

// let height = 0;
// alert(height || 100)
// alert(height ?? 100)

//Precedence
/*The precedence of the ?? operator is the same as ||. They both equal 3 in the MDN table.
That means that, just like ||, the nullish coalescing operator ?? is evaluated before = and ?, 
but after most other operations, such as +, *.*/


// let height = null;
// let width = null;
//important: use parantheses
// let area = (height ?? 100)*(width ?? 50)
// alert(area);//5000

/*Otherwise, if we omit parentheses, then as * has the higher precedence than ??,
 it would execute first, leading to incorrect results. */

 //without parentheses
//  let area = height ?? 100 * width ?? 50;
//  alert(area);

// let area = height ?? 100 * width ?? 50;
// alert(area)


//Using ?? with && or ||
/*Due to safety reasons, JavaScript forbids using ?? together with && and || operators,
 unless the precedence is explicitly specified with parentheses.
*/

// let x = 1 && 2 ?? 3;////Syntax error
// alert(x)

//Use explicit parentheses to work around it:
// let x = (1 && 2) ?? 3; ////it works
// alert(x)