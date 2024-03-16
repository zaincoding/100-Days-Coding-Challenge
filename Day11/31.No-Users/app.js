//initialize an array
var users = ['Usman', 'Naveed', 'Jawad'];
//check the array should not be empty
if (users !== null) {
    //loop through the array start from the last element & remove all
    for (var i = users.length - 1; i >= 0; i--) {
        // users.pop()
        console.log(users[i]);
    }
}
//console.log(`${users} We need to find some users!`) 
