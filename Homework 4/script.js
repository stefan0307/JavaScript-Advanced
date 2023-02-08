let tbody = document.getElementById("tbody");
let btn = document.getElementById("btn");
let divBTN = document.getElementById(`nextBTNS`);
const pageURL = `https://swapi.dev/api/planets/?page=1`;
const pageURL2 = `https://swapi.dev/api/planets/?page=2`;

async function getAllData (URL) {
   const response = await fetch(URL);
   const result = await response.json();
   return result;
}

async function renderAllPlanets (URL){
    let data = await getAllData(URL);
    const result = data.results;
    for (let i of result){
        tbody.innerHTML += `
        <tr>
        <td>${i.name}</td>
        <td>${i.population}</td>
        <td>${i.climate}</td>
        <td>${i.gravity}</td>
        </tr>
    `
    }
};

btn.addEventListener("click", async function (e){
    e.preventDefault();
    await renderAllPlanets(pageURL);
    btn.style.display = "none";
    divBTN.innerHTML += `<button id="nextBTN">Next</button>`;
    divBTN.innerHTML += `<button id="prevBTN">Previous</button>`;
    let prevBTN = document.getElementById("prevBTN");
    let nextBTN = document.getElementById("nextBTN");
    prevBTN.style.visibility= "hidden";
    nextBTN.addEventListener("click", async function (event){
        event.preventDefault();
        tbody.innerHTML = "";
        await renderAllPlanets(pageURL2);
        nextBTN.style.visibility = "hidden";
        prevBTN.style.visibility = "visible";
    })
    prevBTN.addEventListener("click", async function (e){
        e.preventDefault();
        tbody.innerHTML = "";
        await renderAllPlanets(pageURL);
        prevBTN.style.visibility = "hidden";
        nextBTN.style.visibility = "visible"
    })
})