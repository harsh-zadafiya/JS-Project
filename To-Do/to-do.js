let inputTask = document.querySelector(".input");
let addTask = document.querySelector(".add");
let taskLabel = document.querySelector(".tasks");
let taskBox = document.querySelector(".container");
let deleteAll = document.querySelector(".delete-all");
let tasks = [];

if (window.localStorage.getItem("tasks")) {
  tasks = JSON.parse(window.localStorage.getItem("tasks"));
}
const addTaskToTable = (tasks) => {
  taskLabel.innerHTML = "";

  tasks.forEach((task) => {
    let div = document.createElement("div");
    div.className = "task";
    if (task.complated) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    div.appendChild(span);
    taskLabel.appendChild(div);
    // console.log(div)
  });
};

addTask.onclick = function () {
  if (inputTask.value !== "") {
    addTasks(inputTask.value);
    inputTask.value = "";
  }
};

const addTasks = (taskText) => {
  const task = {
    id: Date.now(),
    title: taskText,
  };
  tasks.push(task);
  // console.log(tasks);
  addTaskToTable(tasks);

  addTaskToLS(tasks);
};

const addTaskToLS = (tasks) => {
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
};
function getTaskFromLS() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    // console.log(tasks)
    addTaskToTable(tasks);
  }
}

const addElementsToPageFrom = (tasks) => {
  // Empty Tasks Div
  taskLabel.innerHTML = "";
  // Looping On Array Of Tasks
  tasks.forEach((task) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "task";
    // Check If Task is Done
    if (task.completed) {
      div.className = "task done";
    }
    div.setAttribute("data-id", task.id);
    div.appendChild(document.createTextNode(task.title));
    // Create Delete Button
    let span = document.createElement("span");
    span.className = "del";
    span.appendChild(document.createTextNode("Delete"));
    // Append Button To main div
    div.appendChild(span);
    // Add Task Div To Tasks Container
    taskLabel.appendChild(div);
  });
};

// Click On Task Element
taskLabel.onclick = (e) => {
  if (e.target.classList.contains("del")) {
    // e.target.parentElement.remove();
    e.target.parentElement.remove();
    deleteTaskFromLocalStorage(e.target.parentElement.getAttribute("data-id"));
  }
};

const deleteTaskFromLocalStorage = (taskId) => {
  tasks = tasks.filter((task) => task.id != taskId);
  addTaskToLS(tasks);
};

deleteAll.onclick = function (e) {
  taskLabel.innerHTML = "";
  window.localStorage.removeItem("tasks");
  tasks = [];
};
document.addEventListener("DOMContentLoaded", () => {
  // set initial clock display and then set interval timer to display
  // new time every second. Don't store timer object because it
  // won't be needed - clock will just run.
  console.log("called");
  getTaskFromLS();
  window.localStorage.removeItem("tasks");
});
