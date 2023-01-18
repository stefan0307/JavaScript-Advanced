let userInput = prompt(`Enter a number`);

function sumOfAllNumbers (input){
    let k = 0;
    for (let i=0; i<=input; i++){
        k += i;
    }
    return k;
}

console.log(sumOfAllNumbers(userInput));