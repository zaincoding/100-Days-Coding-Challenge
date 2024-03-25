//Define a type alias for circle.
type Circle ={
    shape: 'circle';
    radius: 5;
}
//Define a type alias for Rectangle.
type Rectangle = {
    shape: 'rectangle';
    Width: 8;
    height: 16;
}
//Function to describe a shape based on it's type
function shapeDs(Shapes: Circle | Rectangle){
      //check if the shape is a circle.
    if(Shapes.shape === 'circle'){
        console.log(`The radius of the circle is ${Shapes.radius}`)
    // check if the shape is a rectangle.
    }else if(Shapes.shape === 'rectangle'){
        console.log(`The width of the rectangle is ${Shapes.Width} and height is ${Shapes.height}`)
    }
}
  //creating instance of circle and rectangle.
//const myCircle:Circle = {shape:'circle',radius:5};
const myRectangle:Rectangle = {shape:'rectangle', height:16, Width:8};
//call the function to get the result.
//shapeDs(myCircle);
shapeDs(myRectangle)