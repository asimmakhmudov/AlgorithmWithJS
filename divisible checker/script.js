let num = 1;
alert("This program is check input number divisible by 2 and 5 \n (If you want exit program enter 0)");
while(num !=0) {
    num = prompt("Enter the number ");
    if (num == 0) {
        alert("Thank for using program");
        break;
    }
    else if(num % 2 == 0 && num % 5 ==0) {
        alert("This number is diveded by 2 and 5");
    }
    else if (num % 2 == 0 && num % 5 !=0) {
        alert("This number is divisible by just 2.");
    }
    else if (num % 5 ==0 && num % 2 != 0) {
        alert("This number is divisible by just 5.");
    }
    else if (num % 5 !=0 && num % 2 != 0) {
        alert("This number is not divisible by 2 and 5.");
    }
}