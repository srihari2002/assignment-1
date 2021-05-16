//Reverse a string
function revStr(str) {
    return str.split("").reverse().join("");
}

var str1=prompt("Enter the string");
console.log(`${revStr(str1)}`);