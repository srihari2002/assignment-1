//To find largest among 3 numbers

var a = parseInt(prompt(" Enter 1st number: "));
var b = parseInt(prompt("Enter 2nd number : "));
var c = parseInt(prompt("Enter 3rd number : "));

if (a>b && a>c) {
  console.log(`The largest number is ${a}`);
}
else if(b>c){
  console.log(`The largest number is ${b}`);
}
else {
  console.log(`The largest number is ${c}`);
}