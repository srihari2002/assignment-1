//Area of the triangle
var choice=parseInt(prompt(" Enter 1 to find area using sides \n Enter 2 to find area using base and height \n"));

switch(choice){

  case 1:
    var a = parseInt(prompt(" Enter Side 1: "));
    var b = parseInt(prompt("Enter Side 2: "));
    var c = parseInt(prompt("Enter Side 3: "));
    var s = (a + b + c) / 2
    var area = (s*(s-a)*(s-b)*(s-c)) ** 0.5
    console.log(`The area of the given triangle is ${area}`);
    break;

  case 2:
    var b = parseInt(prompt("Enter Base value: "));
    var h = parseInt(prompt("Enter Height value: "));
    console.log(`The area of the given triangle is ${(b*h)/2}`);
    break;

    
  default:
    console.log("wrong value");
    
}