//initialize an array
let users:any = ['Usman','Naveed','Jawad'];

//check the array should not be empty
if(users !== null){
//loop through the array start from the last element & remove all
for (let i=users.length-1; i>=0;i--){
     users.pop()
  }
 }
 console.log(`${users} We need to find some users!`) 