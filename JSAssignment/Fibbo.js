// Print fibonacci series up to n terms

var num = parseInt(prompt('Enter the number of terms: '));
let a = 0, b = 1, c;

console.log('Fibonacci Series:');

for (let i = 1; i <= num; i++) {
    console.log(a);
    c = a + b;
    a = b;
    b = c;
}