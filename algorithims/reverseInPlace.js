// Question: If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reverse.

let sentence = "I am good boy!"
console.log(sentence);

function reverseInPlace(sentence) {
    console.log(sentence.split(" ").reverse().join(" ").split("").reverse().join(""));
}

reverseInPlace(sentence)