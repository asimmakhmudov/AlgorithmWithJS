let num = 234

function reverse(num){
    num = num + "";
    return num.split("").reverse().join(",");
}
console.log(Number(reverse(num)));