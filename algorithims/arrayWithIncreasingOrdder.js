const myArr = [1,5,3,76,-3,7];
let leng = myArr.length;
console.log("Original array: [" + myArr + "]");

function sortedArray(){
    for(let i=0; i<leng-1; i++){
        let minIndex = i;
        for(let j = minIndex; j<leng; j++){
            if(myArr[j] < myArr[minIndex]){
                let temp = myArr[j]
                myArr[j]=myArr[minIndex];
                myArr[minIndex] = temp;
            }
        }

    }
    console.log("Sorted array: [" + myArr + "]");
}
sortedArray()