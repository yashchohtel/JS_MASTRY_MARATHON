3. Bank Account :-

Model a bank account as a state object:

let account = { owner: "Priya", balance: 5000, transactionCount: 0 }

Write three functions:
• deposit(amount) — adds to balance, increments transactionCount
• withdraw(amount) — subtracts from balance (don’t allow going below 0), increments transactionCount
• showBalance() — prints owner name, current balance, total transactions

EDGES: Withdraw more than balance, deposit 0 or negative, withdraw 0

-------------------------

INPUT :-

• withdraw amount and deposit amount

PROCESS :-

• deposit(amount) — adds to balance, increments transactionCount
• withdraw(amount) — subtracts from balance (don’t allow going below 0), increments transactionCount
• showBalance() — prints owner name, current balance, total transactions

OUTPUT :-

• withdraw amount & remaining amount 
• deposit amount & amount 
• amount avilable in the bank

EDGE :-

• Withdraw more than balance, deposit 0 or negative, withdraw 0 

-------------------------

PSEUDOCODE :-

<!-- create a object to store user bank informaiton -->
account = { 
    owner: "Priya", 
    balance: 5000, 
    transactionCount: 0
}

<!-- create a function which show the bank balance -->
showBankBalance = () => {

    <!-- get the balance -->
    let avilableBalance = account.balance;

    <!-- display in ui -->
    print - avilableBalance

}

<!-- ------------------ -->

<!-- create a function to deposit money -->
depositMoney = () => {

    <!-- get deposit input value -->

    <!-- validate for empty input -->
    IF (input is empty){

        print - "Please enter deposit amount"
        return

    }

    <!-- validate for negative and zero -->
    IF (amount <= 0){

        print - "Amount must be greater than 0"
        return

    }

    <!-- store previous balance -->
    previousBalance = account.balance

    <!-- deposit money -->
    account.balance += amount

    <!-- increment transaction count -->
    account.transactionCount++

    <!-- display result -->
    print -

    Previous Balance : previousBalance

    Deposited Amount : amount

    Current Balance : account.balance

}

<!-- function to withdraw money -->
withdrawMoney = () => {

    <!-- get withdraw amount -->

    <!-- validate for empty input -->
    IF (input is empty){

        print - "Please enter withdraw amount"
        return

    }

    <!-- validate for negative and zero -->
    IF (amount <= 0){

        print - "Amount must be greater than 0"
        return

    }

    <!-- check sufficient balance -->
    IF (amount > account.balance){

        print - "Insufficient balance"
        return

    }

    <!-- store previous balance -->
    previousBalance = account.balance

    <!-- withdraw money -->
    account.balance -= amount

    <!-- increment transaction count -->
    account.transactionCount++

    <!-- display result -->

}