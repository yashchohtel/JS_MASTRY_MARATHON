// create a object to store user bank informaiton
const account = {
    owner: "yash",
    balance: 5000,
    transactionCount: 0
};

// create a function which show the bank balance
const showBankBalance = () => {

    // get the balance
    const availableBalance = account.balance;

    // display in ui
    document.getElementById("result").innerHTML = `<p>Available Balance : ₹${availableBalance}</p>`;

};

// a function to deposit money
depositMoney = () => {

    const depositAmountInput = document.getElementById("depositAmount").value;
    const depositAmount = Number(depositAmountInput);

    // result element
    const result = document.getElementById("result");

    if (!depositAmountInput) {
        result.innerHTML = "Please enter deposit amount";
        return;
    }

    if (depositAmount <= 0) {
        result.innerHTML = "Amount must be greater than 0";
        return;
    }

    // store previous balance
    const previousBalance = account.balance;

    // deposit amount
    account.balance += depositAmount;

    // increment transactionCount
    account.transactionCount++;

    // display result
    result.innerHTML = `
    <p> <span>Previous Balance :</span> ₹${previousBalance}</p>
    <p> <span>Deposited Amount :</span> ₹${depositAmount}</p>
    <p> <span>Current Balance :</span> ₹${account.balance}</p>
    <p> <span>Transaction Count :</span> ${account.transactionCount}</p>`;

    // clear input
    document.getElementById("depositAmount").value = ""

}

// a function to withdraw money
withdrawMoney = () => {

    // get input value
    const withdrawAmountInput = document.getElementById("withdrawAmount").value;
    const withdrawAmount = Number(withdrawAmountInput);

    // result element
    const result = document.getElementById("result");

    if (!withdrawAmountInput) {
        result.innerHTML = "Please enter withdraw amount";
        return;
    }

    if (withdrawAmount <= 0) {
        result.innerHTML = "Amount must be greater than 0";
        return;
    }

    if (withdrawAmount > account.balance) {
        result.innerHTML = "Insufficient balance";
        document.getElementById("withdrawAmount").value = ""
        return;
    }

    const previousBalance = account.balance;

    account.balance -= withdrawAmount;

    account.transactionCount++;

    result.innerHTML = `
        <p><span>Previous Balance :</span> ₹${previousBalance}</p>
        <p><span>Withdraw Amount :</span> ₹${withdrawAmount}</p>
        <p><span>Current Balance :</span> ₹${account.balance}</p>
        <p><span>Transaction Count :</span> ${account.transactionCount}</p>
    `;

    // clear input
    document.getElementById("withdrawAmount").value = ""

}