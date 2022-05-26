const myArr = [1, 2, 5, 3, 4, 2, 7, 5];
const removedDublicate = [];

function removeDuplicate(myArr) {

    for (let i = 0; i < myArr.length; i++) {

        let element = myArr[i];

        if (!removedDublicate.includes(element)) 
            removedDublicate.push(myArr[i])
        

    }

}

console.log(removedDublicate);

removeDuplicate(myArr)