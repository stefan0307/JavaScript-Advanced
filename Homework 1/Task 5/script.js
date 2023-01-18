let btn = document.getElementById("btn");
let showResult = document.getElementById("result")

let arrayWithALotOfElements = [1, 3, 5, ``, 'Bill', true, null, NaN, "Mike", -90, "Miguel"];

function deleteEverythingExceptNumbers (arr){
    numberArr = [];
    for (let num of arr){
        if (typeof num === `number` && num){
              numberArr.push(num);
        }
    }
    return numberArr;
}

btn.addEventListener("click", function (){
    showResult.innerHTML = `Numbers: ${deleteEverythingExceptNumbers(arrayWithALotOfElements)}`;
    console.log(deleteEverythingExceptNumbers(arrayWithALotOfElements));
})