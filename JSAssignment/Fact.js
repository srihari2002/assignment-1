//Factorial of the given number
var a = parseInt(prompt("Enter the number :"));
function fact(x) {
  if (x==0)
    return 1
  else{
    return x*fact(x-1)
  }
}

console.log(`The factorial of the given number is ${fact(a)}`);