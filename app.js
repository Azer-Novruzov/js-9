// TASK 1
function capitalizeWords(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}
let text = "Hello my name is Azer";
let bigText = capitalizeWords(text);
console.log(bigText); 
// TASK 2
// function isValidNumber(phoneNumber) {
//     let regex = /^\+7\d{10}$/;
//     let isValid = regex.test(phoneNumber);
//     return isValid;
// }

function isValidNumber(phoneNumber) {
    return phoneNumber.startsWith("+7") && phoneNumber.length === 12;
}

// function isValidNumber(phoneNumber) {
//     let regex = /\+\d{10}/;
//     let isValid = regex.test(phoneNumber);
//     return isValid;
// }

let phone1 = "+71234567890";
let phone2 = "71234567890";
let phone3 = "+712345678900";
let phone4 = "+812345678900";
console.log(isValidNumber(phone1)); // true
console.log(isValidNumber(phone2)); // false
console.log(isValidNumber(phone3)); // false
console.log(isValidNumber(phone4)); // false
// TASK 3
function numCounter(text1) {
    let lettersOnly = text1.replace(/[^A-Za-z]/g, '');  // eger bosluq sayilmalidirsa  text1.replace(/[^A-Za-z burda bosluq qoymaq lazimdi]/g, '');
    return lettersOnly.length;
}
let text1 = "Hello world";
console.log(numCounter(text1));
// TASK4
function isLucky(number) {
    let numStr = String(number); // Mecbur basqa metod aglima gelmedi
    if (numStr.length !== 6) {
        return false;
    }
    let firstPart = numStr.slice(0, 3);
    let secondPart = numStr.slice(3);
    let sumFirst = Number(firstPart[0]) + Number(firstPart[1]) + Number(firstPart[2]);
    let sumSecond = Number(secondPart[0]) + Number(secondPart[1]) + Number(secondPart[2]);
    return sumFirst === sumSecond;
}
console.log(isLucky(234801)); // true
console.log(isLucky(123456)); // false
console.log(isLucky(111111)); // true

