let number = prompt("Enter the number: ")

function ordianlNum(number) {
    let l = number%10;
    let d = number%100

    if(l == 1 && d != 11)
        alert(`${number}st`);
    else if(l == 2 && d != 12)
        alert(`${number}nd`);
    else if(l == 3 && d != 13)
        alert(`${number}rd`);
    else        
        alert(`${number}th`);
}

ordianlNum(number);