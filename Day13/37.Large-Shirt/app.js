function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = "I love typeScript"; }
    //return  'Size:'+ " " +size + "\n" + 'Size:' + " " + size1 + "\n"  + " "+ message
    console.log("\nSize: ".concat(size, " \nMessage: ").concat(message));
}
make_shirt();
make_shirt('medium');
make_shirt('small', '\nSLOW\nPROGRESS\nIS\nBETTER\\nTHAN\nNO\nPROGRESS');
