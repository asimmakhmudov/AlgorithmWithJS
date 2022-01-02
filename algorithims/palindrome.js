let num = 0;
let rem, rev = 0;
alert("This program check number is palindrome or not. If you want exit program type 0");
do {
    num = prompt("Enter the number")
    let temp = num;
    while (temp != 0) {
        rem = temp % 10;
        temp = Math.floor(temp / 10);
        rev = rev * 10 + rem;
    }
    if(num == 0){
        alert("bye");
    }
    else if (num == rev) {
        alert("Your number: "+ num +"\nCongrats!, it is palindrome, " + "\nReverse of number is " + rev);
    }
    else {
        alert("Your number: "+ num +"\nIt is not palindrome, " + "\nReverse of number is " + rev);
    }
    rev = 0
} while (num != 0)
