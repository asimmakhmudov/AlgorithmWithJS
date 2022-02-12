let a = 's6d324fd4f'
console.log(a);
const b = []
a = a.split('').map(function (item) {
    parseInt(item)
    if(item >= 0 && item <= 9) {
        return item
    }
    b.push(item)
})
console.log(b.join(''));