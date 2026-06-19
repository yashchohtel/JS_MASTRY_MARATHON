// set object structure
let budget = {
    transactions: [],
    balance: 0,
    totalIncome: 0,
    totalExpenses: 0
};

// function to add income
function addIncome() {

    // get input values
    let incomeDescription = document.getElementById("incomeDescription").value.trim();
    let incomeAmount = document.getElementById("incomeAmount").value.trim();

    let balance = document.getElementById("balance");
    let result = document.getElementById("result");

    // validate empty inputs
    if (incomeDescription === "" || incomeAmount === "") {
        result.innerHTML = "Please fill all fields.";
        return;
    }

    // convert amount to number
    incomeAmount = Number(incomeAmount);

    // validate amount
    if (incomeAmount <= 0) {
        result.innerHTML = "Amount must be greater than 0.";
        return;
    }

    // create transaction object
    let transaction = {
        type: "Income",
        description: incomeDescription,
        amount: incomeAmount
    };

    // add transaction
    budget.transactions.push(transaction);

    // update balance
    budget.balance += incomeAmount;

    // update total income
    budget.totalIncome += incomeAmount;

    // update current balance
    balance.innerHTML = `Current Balance : ₹${budget.balance}`;

    // show success message
    result.innerHTML = "Income added successfully.";

    // clear inputs
    document.getElementById("incomeDescription").value = "";
    document.getElementById("incomeAmount").value = "";

}

// function to add expense
function addExpense() {

    // get input values
    let expenseDescription = document.getElementById("expenseDescription").value.trim();
    let expenseAmount = document.getElementById("expenseAmount").value.trim();

    let balance = document.getElementById("balance");
    let result = document.getElementById("result");

    // validate empty inputs
    if (expenseDescription === "" || expenseAmount === "") {
        result.innerHTML = "Please fill all fields.";
        return;
    }

    // convert amount to number
    expenseAmount = Number(expenseAmount);

    // validate amount
    if (expenseAmount <= 0) {
        result.innerHTML = "Amount must be greater than 0.";
        return;
    }

    // validate balance
    if (expenseAmount > budget.balance) {

        result.innerHTML = `
            <p>Insufficient balance.</p>
            <p><strong>Expense:</strong> ₹${expenseAmount}</p>
            <p><strong>Available Balance:</strong> ₹${budget.balance}</p>
            <p><strong>Short By:</strong> ₹${expenseAmount - budget.balance}</p>
        `;

        return;

    }

    // create transaction object
    let transaction = {
        type: "Expense",
        description: expenseDescription,
        amount: expenseAmount
    };

    // add transaction
    budget.transactions.push(transaction);

    // update balance
    budget.balance -= expenseAmount;

    // update total expense
    budget.totalExpenses += expenseAmount;

    // update current balance
    balance.innerHTML = `Current Balance : ₹${budget.balance}`;

    // show success message
    result.innerHTML = "Expense added successfully.";

    // clear inputs
    document.getElementById("expenseDescription").value = "";
    document.getElementById("expenseAmount").value = "";

}

// function to show transactions
function showTransactions() {

    let result = document.getElementById("result");

    // validate no transactions
    if (budget.transactions.length === 0) {
        result.innerHTML = "No transactions found.";
        return;
    }

    // create output
    let output = "";

    // display transactions
    for (let transaction of budget.transactions) {

        output += `
            <p>
                <strong>Type:</strong> ${transaction.type}<br>
                <strong>Description:</strong> ${transaction.description}<br>
                <strong>Amount:</strong> ₹${transaction.amount}
            </p>
            <hr>
        `;

    }

    // display output
    result.innerHTML = output;

}

// function to show summary
function showSummary() {

    let result = document.getElementById("result");

    // validate no transactions
    if (budget.transactions.length === 0) {
        result.innerHTML = "No transactions found.";
        return;
    }

    // display summary
    result.innerHTML = `
        <p><strong>Current Balance:</strong> ₹${budget.balance}</p>
        <p><strong>Total Income:</strong> ₹${budget.totalIncome}</p>
        <p><strong>Total Expenses:</strong> ₹${budget.totalExpenses}</p>
    `;

}