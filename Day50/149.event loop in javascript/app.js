function myFunction() {
    console.log('1st string execution ');
    setTimeout(function () {
        console.log('2nd string execution');
    }, 0);
    console.log('3rd String execution');
}
myFunction();
