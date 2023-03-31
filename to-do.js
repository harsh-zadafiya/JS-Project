let newTask = document.getElementById("new-task");
let taskList = document.getElementById("task-list");

function addTask() {
  let task = newTask.value;
  if (task !== "") {
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "task" + (taskList.childNodes.length + 1);
    let label = document.createElement("label");
    label.htmlFor = checkbox.id;
    label.appendChild(document.createTextNode(task));
    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    taskList.appendChild(listItem);
    newTask.value = "";
  }
}

function completeTask(checkbox) {
  let listItem = checkbox.parentNode;
  if (checkbox.checked) {
    listItem.classList.add("completed");
  } else {
    listItem.classList.remove("completed");
  }
}
