// set object structure
let habitTracker = {
    habits: [],
    totalHabits: 0,
    todayCompleted: 0
};

// function to add habit
function addHabit() {

    // get input values
    let habitName = document.getElementById("habitName").value.trim();
    let targetPerWeek = document.getElementById("targetPerWeek").value.trim();

    let habitContainer = document.getElementById("habitContainer");
    let emptyMessage = document.getElementById("emptyMessage");
    let result = document.getElementById("result");

    // validate empty inputs
    if (habitName === "" || targetPerWeek === "") {
        result.innerHTML = "Please fill all fields.";
        return;
    }

    // convert target per week to number
    targetPerWeek = Number(targetPerWeek);

    // validate target
    if (targetPerWeek <= 0) {
        result.innerHTML = "Target must be greater than 0.";
        return;
    }

    // validate duplicate habit
    for (let habit of habitTracker.habits) {

        if (habit.name.toLowerCase() === habitName.toLowerCase()) {
            result.innerHTML = "Habit already exists.";
            return;
        }

    }

    // create habit object
    let habit = {
        name: habitName,
        targetPerWeek: targetPerWeek,
        completed: false
    };

    // add habit
    habitTracker.habits.push(habit);

    // increment total habits
    habitTracker.totalHabits++;

    // hide empty message
    emptyMessage.style.display = "none";

    // display habit
    habitContainer.innerHTML += `
        <div class="habit">

            <span>
                ${habit.name} (${habit.targetPerWeek}/week)
            </span>

            <label>

                <input
                    type="checkbox"
                    onchange="markDone(${habitTracker.habits.length - 1})"
                >

                Done

            </label>

        </div>
    `;

    // show success message
    result.innerHTML = "Habit added successfully.";

    // clear inputs
    document.getElementById("habitName").value = "";
    document.getElementById("targetPerWeek").value = "";

}

// function to mark as done 
markDone = (index) => {

    // find the habbit
    let habit = habitTracker.habits[index]

    // mark/unmark as complete and increment todayCompleted
    if (habit.completed === false) {

        habit.completed = true;
        habitTracker.todayCompleted++;

    } else {

        habit.completed = false;
        habitTracker.todayCompleted--;

    }

    console.log(habitTracker);

}

// function to show habits
function showHabits() {

    let result = document.getElementById("result");

    // validate no habits
    if (habitTracker.habits.length === 0) {
        result.innerHTML = "No habits found.";
        return;
    }

    // create output
    let output = "";

    // display habits
    for (let habit of habitTracker.habits) {

        output += `
            <p>
                <strong>Habit:</strong> ${habit.name}<br>
                <strong>Target:</strong> ${habit.targetPerWeek}/week<br>
                <strong>Status:</strong> ${habit.completed ? "Completed" : "Pending"}
            </p>
            <hr>
        `;

    }

    // display output
    result.innerHTML = output;

}

// function to show stats
function showStats() {

    let result = document.getElementById("result");

    // validate no habits
    if (habitTracker.habits.length === 0) {
        result.innerHTML = "No habits found.";
        return;
    }

    // display stats
    result.innerHTML = `
        <p><strong>Total Habits:</strong> ${habitTracker.totalHabits}</p>
        <p><strong>Completed Today:</strong> ${habitTracker.todayCompleted}</p>
        <p><strong>Remaining Habits:</strong> ${habitTracker.totalHabits - habitTracker.todayCompleted}</p>
    `;

}

// function to reset today
resetDay = () => {

    let result = document.getElementById("result");

    // validate no habits
    if (habitTracker.habits.length === 0) {
        result.innerHTML = "No habits found.";
        return;
    }

    // loop all habit to mark un completed
    for (let habit of habitTracker.habits) {
        habit.completed = false;
    }

    // update today completed
    habitTracker.todayCompleted = 0

    // uncheck all checkboxes
    let checkboxes = document.querySelectorAll("#habitContainer input[type='checkbox']");

    for (let checkbox of checkboxes) {
        checkbox.checked = false;
    }

    result.innerHTML = "habit reset done";

}