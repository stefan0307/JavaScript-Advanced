let arrayNum = [4, -9, -98, -1, 444, 3, -555];

function turnNegativeIntoPositive (arr){
    newArr = [];
    for (let neg of arr){
        if (neg < 0){
            newArr.push(Math.abs(neg));
        }
    }
    return newArr;
}

console.log(turnNegativeIntoPositive(arrayNum));