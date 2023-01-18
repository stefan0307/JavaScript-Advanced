let btn = document.getElementById("odd");
let printOdd = document.getElementById("printOdd");

randomNum = [12, 45, 88, 1, 567, 3, 91];

function printOddNumbers (arr){
    oddNum = [];
    for (let odd of arr){
        if (odd % 2 ==! 0){
            oddNum.push(odd);
        }
    }
    return oddNum;
}''

btn.addEventListener("click", function (){
    printOdd.innerHTML = `Odd Numbers are: <strong>${printOddNumbers(randomNum)}</strong>`;
    console.log(printOddNumbers(randomNum));
});