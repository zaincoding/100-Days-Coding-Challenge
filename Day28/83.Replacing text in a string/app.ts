//Define 'text' variable.
let text:string ="Hello how are you?"
//Define 'text1' variable.
let text1:string = "he wears a white hat and a white coat."
//output original string.
console.log(text)
//output modified string.
console.log(text.replace("Hello", "Hi"))
//Output original string is not modified.
console.log(text);
//Output original string.
console.log(text1)
//Output modified string
console.log(text1.replace(/white/g, "brown"))
//Output original string is not modified.
console.log(text1)

