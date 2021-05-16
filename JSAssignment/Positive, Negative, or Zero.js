//To find the given num is Positive, Negative, or Zero

var a = parseInt(prompt(" Enter the number: "));
    
if (a==0) {
  console.log(`The given number is zero`);
}
else if(a>0){
  console.log(`${a} is a positive number`);
}
else {
  console.log(`${a} is a negative number`);
}