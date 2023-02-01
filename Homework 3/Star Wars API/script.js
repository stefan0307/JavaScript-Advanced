$(document).ready(function () {
  let btn = document.getElementById("btn");
  let table = document.getElementById("table");
   btn.addEventListener("click", function () {
    $.ajax({
      url: "https://swapi.dev/api/people/1",
      success: function (response){
         table.innerHTML =`
         <h1>${response.name}</h1>
         <tr>
         <td>Height</td>
         <td>${response.height}</td>
         </tr>
         <tr>
         <td>Weight</td>
         <td>${response.mass}</td>
         </tr>
         <tr>
         <td>Eye Color</td>
         <td>${response.eye_color}</td>
         </tr>
         <tr>
         <td>Hair Color</td>
         <td>${response.hair_color}</td>
         </tr>`
      },
      error: function (error){
        console.log(error);
      }
    })
   })
})