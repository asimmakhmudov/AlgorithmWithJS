let count = 0;
let number = prompt("Enter number");
let factorial = 1;
let result = 0;
for(let i=1; i<=number; i++){
    count++;
    factorial *= i;
}
console.log(factorial);