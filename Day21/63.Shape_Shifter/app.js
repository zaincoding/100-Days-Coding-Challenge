//Function to describe a shape based on it's type
function shapeDs(Shapes) {
    //check if the shape is a circle.
    if (Shapes.shape === 'circle') {
        console.log("The radius of the circle is ".concat(Shapes.radius));
        // check if the shape is a rectangle.
    }
    else if (Shapes.shape === 'rectangle') {
        console.log("The width of the rectangle is ".concat(Shapes.Width, " and height is ").concat(Shapes.height));
    }
}
//creating instance of circle and rectangle.
//const myCircle:Circle = {shape:'circle',radius:5};
var myRectangle = { shape: 'rectangle', height: 16, Width: 8 };
//call the function to get the result.
//shapeDs(myCircle);
shapeDs(myRectangle);
