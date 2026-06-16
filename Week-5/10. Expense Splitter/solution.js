let trip = {
    name: "",
    members: [],
    expenses: [],
    totalSpent: 0
}

// function to add trip name
addTripName = () => {

    // select result element
    let result = document.querySelector("#result");
    result.innerHTML = "";

    // trip allready validation
    if (trip.name) {
        result.innerHTML = "trip name allready added add members"
        return
    }

    // get trip element
    let tripname = document.querySelector("#tripName").value.trim();

    // empty validation
    if (tripname === "") {
        result.innerHTML = "please enter trip name"
        return
    }

    // set trip name
    trip.name = tripname

    // show feedback
    result.innerHTML = "now add members more than 1"

}

// add member name
addMember = () => {

    // select result element
    let result = document.querySelector("#result");
    result.innerHTML = "";

    // first check trip name exist or not
    if (!trip.name) {
        result.innerHTML = "please create a trip first"
        return
    }

    // get member name
    let memberName = document.getElementById("memberName").value.trim();

    // validation
    if (memberName === "") {
        result.innerHTML = "Please enter member name.";
        return;
    }

    // add member
    trip.members.push(memberName);

    // success message
    result.innerHTML = `
    <strong>${memberName}</strong> added successfully.<br><br>

    Total Members: ${trip.members.length}<br>
        ${trip.members.length === 1 ? "Add next member." : "Add another member or enter expense."}
    `;

    // clear input
    document.getElementById("memberName").value = "";

    // select dropdown
    let paidBy = document.getElementById("paidBy");

    // add option
    paidBy.innerHTML += `<option value="${memberName}"> ${memberName}</option>`;

}

// function to add expense
addExpense = () => {

    // select result element
    let result = document.getElementById("result");
    result.innerHTML = "";

    // trip validation
    if (!trip.name) {
        result.innerHTML = "Please create a trip first.";
        return;
    }

    // minimum members validation
    if (trip.members.length < 2) {
        result.innerHTML = "Please add at least 2 members.";
        return;
    }

    // get inputs
    let paidBy = document.getElementById("paidBy").value;
    let expenseName = document.getElementById("expenseName").value.trim();
    let expenseAmount = document.getElementById("expenseAmount").value.trim();

    // validation
    if (paidBy === "") {
        result.innerHTML = "Please select a member.";
        return;
    }

    if (expenseName === "") {
        result.innerHTML = "Please enter expense name.";
        return;
    }

    if (expenseAmount === "") {
        result.innerHTML = "Please enter expense amount.";
        return;
    }

    // convert into number
    expenseAmount = Number(expenseAmount);

    if (expenseAmount <= 0) {
        result.innerHTML = "Please enter a valid expense amount.";
        return;
    }

    // create a expense data
    let expenseData = {
        expenseName,
        paidBy,
        expenseAmount,
    }

    // insert in array
    trip.expenses.push(expenseData);

    // update total expense
    trip.totalSpent += expenseAmount

    // Success Message
    result.innerHTML = `
        <strong>Expense Added Successfully!</strong><br><br>

        <strong>Paid By:</strong> ${paidBy}<br>
        <strong>Expense:</strong> ${expenseName}<br>
        <strong>Amount:</strong> ₹${expenseAmount}<br><br>

        Add another expense or view trip summary.
    `;

    // clear inputs
    document.getElementById("paidBy").value = "";
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";

    console.log(trip);
    
}

// function to show summary
showSummary = () => {

    // select result element
    let result = document.getElementById("result");
    result.innerHTML = "";

    let errors = "";

    // validations
    if (!trip.name) {
        errors += "• Please create a trip.<br>";
    }

    if (trip.members.length < 2) {
        errors += "• Please add at least 2 members.<br>";
    }

    if (trip.expenses.length === 0) {
        errors += "• Please add at least one expense.<br>";
    }

    // show all errors
    if (errors !== "") {
        result.innerHTML = errors;
        return;
    }

    // show summary

    // total share per member
    let sharePerPerson = trip.totalSpent / trip.members.length;

    // expense list
    let expenseList = "";

    for (let expense of trip.expenses) {
        expenseList += `<p> <strong>${expense.paidBy}</strong> paid ₹${expense.expenseAmount} for <strong>${expense.expenseName}</strong></p>`;
    }

    // settlement
    let settlement = "";

    for (let member of trip.members) {

        // total paid by current member
        let paid = 0;

        for (let expense of trip.expenses) {

            if (expense.paidBy === member) {
                paid += expense.expenseAmount;                
            }

        }

        // calculate difference
        let difference = paid - sharePerPerson;

        settlement += `
        <div class="expenseCard">

        <h3>${member}</h3>

        <p><strong>Paid :</strong> ₹${paid}</p>

        <p><strong>Share :</strong> ₹${sharePerPerson}</p>`;

        if (difference > 0) {
            settlement += `<p><strong>Gets Back :</strong> ₹${difference}</p>`;
        }

        else if (difference < 0) {
            settlement += `<p><strong>Needs to Pay :</strong> ₹${Math.abs(difference)}</p>`;
        }

        else {
            settlement += `<p> <strong>Status :</strong> Settled</p>`;
        }

        settlement += `
        </div >`;

    }

    // show summary
    result.innerHTML = `
        <h2>${trip.name}</h2>
        <p><strong>Total Members :</strong> ${trip.members.length}</p>
        <p><strong>Total Spent :</strong> ₹${trip.totalSpent}</p>
        <p><strong>Each Person Owes :</strong> ₹${sharePerPerson}</p>
        <h3>Expenses</h3>${expenseList} <h3>Settlement</h3>

    ${settlement}`;

}