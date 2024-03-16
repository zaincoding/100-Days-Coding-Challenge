//Array of current user initialized
const current_users:any =['Javed','Amir','Nooman','zafar','Iqbal'];
//Array of new users to check.
const new_users:any =['javed','Danish','Anwar','Zafar','Liaqat'];

//loop through each new user to check it's avalibality.
for(let i=0; i<new_users.length; i++){

    //check if the new user exist in the current user array also igonre case.
if(current_users.some(users => users.toLowerCase() === new_users[i].toLowerCase())){
     //username already taken.
    console.log(`The Name ${new_users[i]}, is already taken.`)
}else{
      //print username that's avaliable.
    console.log(`The Name ${new_users[i]}, is avaliable.`)
 }
}