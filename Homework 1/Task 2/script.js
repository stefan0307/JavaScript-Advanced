let number = prompt(`Enter a number`);

function printAllNumbers (arr){
    let arrayOfAllNumbers = [];
    for (let i = 0; i<=arr; i++){
        arrayOfAllNumbers.push(i + 1);
    }
    return arrayOfAllNumbers;
};

console.log(printAllNumbers(number));