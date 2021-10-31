var timeDisplayEl = document.querySelector("#time-display");
var projectDisplayEl = document.querySelector("#project-display");
var projectModalEl = document.querySelector("#project-modal");
var projectFormEl = document.querySelector("#project-form")
var projectNameInputEl = document.querySelector('#project-name-input');
var projectTypeInputEl = document.querySelector('#project-type-input');
var hourlyRateInputEl = document.querySelector('#hourly-rate-input');
var dueDateInputEl = document.querySelector('#due-date-input');


function displayTime(){
    var timeNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    console.log(timeNow);
    console.log(timeDisplayEl)
    timeDisplayEl.textContent = timeNow;
}

function calculateTotalEarnings(rate, days) {
    var dailyTotal = rate * 8;
    var total = dailyTotal * days;
    return total;
  }

function printProjectData(name, type, hourlyRate, dueDate){
    var projectRowEl = document.createElement("tr");

    var projectNameTdEl = document.createElement("td");
    projectNameTdEl.setAttribute("class", "p-2");
    projectNameTdEl.textContent = name;

    var projectTypeTdEl = document.createElement("td");
    projectTypeTdEl.setAttribute("class", "p-2");
    projectTypeTdEl.textContent = type;

    var rateTdEl = document.createElement("td");
    rateTdEl.setAttribute("class", "p-2");
    rateTdEl.textContent = hourlyRate;
    
    var dueDateTdEl = document.createElement("td");
    dueDateTdEl.setAttribute("class", "p-2");
    dueDateTdEl.textContent = dueDate;

    var daysToDate = moment(dueDate, 'MM/DD/YYYY').diff(moment(), 'days');
    var daysToDateTdEl = document.createElement("td");
    daysToDateTdEl.setAttribute("class", "p-2");
    daysToDateTdEl.textContent = daysToDate;

    var totalEarnings = calculateTotalEarnings(hourlyRate, daysToDate)

    var totalEarningsTdEl = document.createElement("td");
    totalEarningsTdEl.setAttribute("class", "p-2");
    totalEarningsTdEl.textContent = "$ " + totalEarnings;
   

  var deleteProjectBtn = document.createElement("td");
  deleteProjectBtn.setAttribute("class", "p-2 delete-project-btn text-center");
  deleteProjectBtn.textContent = 'X';
    


    projectRowEl.append(projectNameTdEl);
    projectRowEl.append(projectTypeTdEl);
    projectRowEl.append(rateTdEl);
    projectRowEl.append(dueDateTdEl);
    projectRowEl.append(daysToDateTdEl);
    projectRowEl.append(totalEarningsTdEl);
    projectRowEl.append(deleteProjectBtn)

    projectDisplayEl.append(projectRowEl);
}

function handleProjectFormSubmit(event){
event.preventDefault();
var projectName = projectNameInputEl.value;
var projectType = projectTypeInputEl.value;
var hourlyRate =  hourlyRateInputEl.value;
var dueDate = dueDateInputEl.value;

printProjectData(projectName, projectType, hourlyRate, dueDate);
}


function handleDeleteProject(event) {
    console.log(event.target);
    var btnClicked = event.target;
   btnClicked.parentElement.remove(); 
  }

projectFormEl.addEventListener("submit", handleProjectFormSubmit);
projectDisplayEl.addEventListener("click", handleDeleteProject)
//deleteProjectBtn.addEventListener('click', handleDeleteProject);

setInterval(displayTime, 1000);
dueDateInputEl.datepicker({ minDate: 1 });
