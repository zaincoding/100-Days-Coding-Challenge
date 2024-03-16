// Define a function make_shirt with two parameters: size and message, both with default values
function make_shirt(size:string='Large', message:string="I love typeScript"){
    // Log the size and message of the shirt
    console.log(`\nSize: ${size} \nMessage: ${message}`);

}
// Call the function with default values
make_shirt()
//call the function with a medium size and default message.
make_shirt('medium');
//call the function with small size and custome message.
make_shirt('small','\nSLOW\nPROGRESS\nIS\nBETTER\\nTHAN\nNO\nPROGRESS')