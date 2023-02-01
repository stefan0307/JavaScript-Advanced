let titleInput = document.getElementById(`title`);
let priorityInput = document.getElementById(`priority`);
let colorInput = document.getElementById(`color`);
let descriptionInput = document.getElementById(`textarea`);
let btnAdd = document.getElementById(`btnAdd`);
let btnShow = document.getElementById(`btnShow`);
let result = document.getElementById(`result`);

let reminders = []

function Reminder (title, priority, color, description){
    this.title = title,
    this.priority = priority,
    this.color = color,
    this.description = description;
};

function createReminder (){
    let reminder = new Reminder(titleInput.value, priorityInput.value, colorInput.value, descriptionInput.value);
    reminders.push(reminder);
};

btnAdd.addEventListener("click", function (event) {
    event.preventDefault();
    
    if (!titleInput.value){
        console.log(`You must enter a title!`);
        return;
    }
    if (!priorityInput.value){
        console.log(`You must enter a priority!`);
        return;
    }
    if (!colorInput.value){
        console.log(`You must enter a color!`);
        return;
    }
    if (!descriptionInput.value){
        console.log("You must enter a description!")
        return;
    }
    createReminder();
    titleInput.value = ``;
    priorityInput.value = ``;
    colorInput.value = ``;
    descriptionInput.value = ``;
    console.log(reminders);
});

function showResult (reminderArr){
    result.innerHTML = `<table id="table" border="1px solid"><table>`;
    let table = document.getElementById(`table`);
    table.innerHTML = `
    <thead id="thead">
        <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Description</th>
        </tr>
     </thead>
     <tbody id="tbody"></tbody>
    `
    let tbody = document.getElementById("tbody");

    for (let remind of reminderArr){
     tbody.innerHTML += `
     <tr>
      <td style="color: ${remind.color}"><b>${remind.title}</b></td>
      <td>${remind.priority}</td>
      <td>${remind.description}</td>
    </tr>
     `
    }
    return table;
};

btnShow.addEventListener("click", function (event){
    event.preventDefault();
    
    if (reminders.length === 0){
        return;
    } else {
        showResult(reminders);
    }
});