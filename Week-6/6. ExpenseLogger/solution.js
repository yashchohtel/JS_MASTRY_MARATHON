// set object
// let expenseLog = {

//     entries: [

//         {
//             category: "Food",
//             description: "Pizza",
//             amount: 350
//         },

//         {
//             category: "Travel",
//             description: "Bus Ticket",
//             amount: 120
//         },

//         {
//             category: "Food",
//             description: "Burger",
//             amount: 200
//         }

//     ],

//     totalSpent: 670,

//     categoryBreakdown: {

//         Food: 550,
//         Travel: 120

//     }

// };

let expenseLog = {
    entries: [],
    totalSpent: 0,
    categoryBreakdown: {}
};

// function to add expense
function addExpense() {

    // get input values
    let expenseCategory = document.getElementById("expenseCategory").value;
    let expenseDescription = document.getElementById("expenseDescription").value.trim();
    let expenseAmount = document.getElementById("expenseAmount").value.trim();

    let expenseTable = document.getElementById("expenseTable");
    let expenseTableBody = document.getElementById("expenseTableBody");
    let emptyMessage = document.getElementById("emptyMessage");
    let result = document.getElementById("result");

    // validate empty inputs
    if (expenseCategory === "" || expenseDescription === "" || expenseAmount === "") {
        result.innerHTML = "Please fill all fields.";
        return;
    }

    // convert amount to number
    expenseAmount = Number(expenseAmount);

    // validate amount
    if (expenseAmount <= 0) {
        result.innerHTML = "Please enter a valid amount.";
        return;
    }

    // create expense object
    let expense = {
        category: expenseCategory,
        description: expenseDescription,
        amount: expenseAmount
    };

    // add expense to entries
    expenseLog.entries.push(expense);

    // update total spent
    expenseLog.totalSpent += expenseAmount;

    // update category breakdown
    if (!expenseLog.categoryBreakdown[expense.category]) {
        expenseLog.categoryBreakdown[expense.category] = 0;
    }

    expenseLog.categoryBreakdown[expense.category] += expense.amount;

    // hide empty message
    emptyMessage.style.display = "none";

    // show table
    expenseTable.style.display = "table";

    // display expense
    expenseTableBody.innerHTML += `
        <tr>
            <td>${expense.category}</td>
            <td>${expense.description}</td>
            <td>₹${expense.amount}</td>
        </tr>
    `;

    // show feedback
    result.innerHTML = "Expense added successfully.";

    // clear inputs
    document.getElementById("expenseCategory").selectedIndex = 0;
    document.getElementById("expenseDescription").value = "";
    document.getElementById("expenseAmount").value = "";

}

// function to show expense by category
function showByCategory() {

    // get input
    let category = document.getElementById("filterCategory").value;
    let result = document.getElementById("result");

    // validate no expenses
    if (expenseLog.entries.length === 0) {
        result.innerHTML = "No expenses found. Add your expenses.";
        return;
    }

    // validate empty category
    if (category === "") {
        result.innerHTML = "Please select a category.";
        return;
    }

    // find category expenses
    let categoryExpenses = expenseLog.entries.filter(
        expense => expense.category.toLowerCase() === category.toLowerCase()
    );

    // validate category not found
    if (categoryExpenses.length === 0) {
        result.innerHTML = "No expenses found for this category.";
        return;
    }

    // store output
    let output = "";

    // store total category amount
    let total = 0;

    // display category expenses
    for (let expense of categoryExpenses) {

        total += expense.amount;

        output += `
            <p>
                <strong>Description:</strong> ${expense.description}<br>
                <strong>Amount:</strong> ₹${expense.amount}
            </p>
            <hr>
        `;

    }

    // display result
    result.innerHTML = `${output} <p><strong>Total ${category} Expense:</strong> ₹${total}</p>`;

}

// function to show total expense
function showTotal() {

    let result = document.getElementById("result");

    // validate no expenses
    if (expenseLog.entries.length === 0) {
        result.innerHTML = "No expenses found. Add your expenses.";
        return;
    }

    // display total expense
    result.innerHTML = `
        <p><strong>Total Expenses:</strong> ₹${expenseLog.totalSpent}</p>
    `;

}