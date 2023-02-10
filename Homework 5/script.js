function digitsOfNumber (number) {
    if (number < 0){
        return `The number has ${number.toString().length - 1} digits`;
    }
    if (number < 10){
        return `The number has ${number.toString().length} digit`;
    }
    if (number < -10 && number > 0){
        return `The number has ${number.toString().length - 1} digit`;
    }
    return `The number has ${number.toString().length} digits`;
};

function oddOrEven (number) {
    if (number % 2 === 0){
        return `The number is even`;
    } else {
        return `The number is odd`;
    }
};

function positiveOrNegative (number){
    if (number < 0){
        return `The number is negative`;
    } else if (number > 0) {
        return `The number is positive`;
    } else {
        return `The number is neither positive nor negative`;
    }
};

function the3in1Function (number){
    if (typeof number !== 'number') {
        return 'Please enter a valid input';
      }
    return `${digitsOfNumber(number)} ${oddOrEven(number)} ${positiveOrNegative(number)}`;
};

console.log(the3in1Function(-2));