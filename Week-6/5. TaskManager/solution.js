// set task manager 
let taskManager = {
    tasks: [],
    completedCount: 0,
    pendingCount: 0
};

// function to add task
function addTask() {

    // get input values
    let taskTitle = document.getElementById("taskTitle").value.trim();
    let taskPriority = document.getElementById("taskPriority").value;

    let taskContainer = document.getElementById("taskContainer");
    let emptyMessage = document.getElementById("emptyMessage");
    let showSummaryBtn = document.getElementById("showSummaryBtn");
    let result = document.getElementById("result");

    // validate empty inputs
    if (taskTitle === "" || taskPriority === "") {
        result.innerHTML = "Please fill all fields.";
        return;
    }

    // create task object
    let task = {
        title: taskTitle,
        priority: taskPriority,
        completed: false
    };

    // add task to array
    taskManager.tasks.push(task);

    // increment pending count
    taskManager.pendingCount++;

    // hide empty message
    emptyMessage.style.display = "none";

    // show summary button
    showSummaryBtn.style.display = "block";

    // display task
    taskContainer.innerHTML += `
        <div class="task">

            <span>${task.title} (${task.priority})</span>

            <label>
                <input
                    type="checkbox"
                    onchange="completeTask(${taskManager.tasks.length - 1})"
                >
                Done
            </label>

        </div>
    `;

    // show feedback
    result.innerHTML = "Task added successfully.";

    // clear inputs
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskPriority").selectedIndex = 0;

}

// function to mark task as completed
function completeTask(index) {

    // find clicked task
    let task = taskManager.tasks[index];

    // mark and unmark task
    if (task.completed === false) {

        task.completed = true;
        taskManager.completedCount++;
        taskManager.pendingCount--;

    } else {

        task.completed = false;
        taskManager.completedCount--;
        taskManager.pendingCount++;

    }

}

// function to show tasks by priority
function showByPriority() {

    // get input
    let priority = document.getElementById("filterPriority").value;
    let result = document.getElementById("result");

    // validate no tasks
    if (taskManager.tasks.length === 0) {
        result.innerHTML = "No tasks found add taks first.";
        return;
    }

    // validate empty input
    if (priority === "") {
        result.innerHTML = "Please select a priority.";
        return;
    }

    // store output
    let output = "";

    // find and display tasks
    for (let task of taskManager.tasks) {

        if (task.priority === priority) {

            output += `
                <p>
                    <strong>Task:</strong> ${task.title}<br>
                    <strong>Priority:</strong> ${task.priority}<br>
                    <strong>Status:</strong> ${task.completed ? "Completed" : "Pending"}
                </p>
                <hr>
            `;

        }

    }

    // validate no matching tasks
    if (output === "") {
        result.innerHTML = "No tasks found for this priority.";
        return;
    }

    // display tasks
    result.innerHTML = output;

}

// function to show summary
function showSummary() {

    let result = document.getElementById("result");

    // validate no tasks
    if (taskManager.tasks.length === 0) {
        result.innerHTML = "No tasks found.";
        return;
    }

    // display summary
    result.innerHTML = `
        <p><strong>Total Tasks:</strong> ${taskManager.tasks.length}</p>
        <p><strong>Completed Tasks:</strong> ${taskManager.completedCount}</p>
        <p><strong>Pending Tasks:</strong> ${taskManager.pendingCount}</p>
    `;

}