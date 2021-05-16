//To find given number is prime or not

var a = parseInt(prompt(" Enter the number: "));
var f=0;
for (let i =2; i < a; i++) {
if (a%i==0){
    f=1
    break;
  }
}

  if (f==0 && a!=0){
    console.log(`${a} is a prime number`);
  }
  else if(f==1 || a==0){
     console.log(`${a} is a not a prime number`);
  }
  
  

