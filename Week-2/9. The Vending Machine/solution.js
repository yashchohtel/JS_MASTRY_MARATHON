calculateTax = () => {

    // Get the income value from the input field
    let incomeInput = document.getElementById("income").value;
    let income = Number(incomeInput);
    let result = document.getElementById("result");

    // slabs
    let slab1 = 0;
    let slab2 = 5;
    let slab3 = 20;
    let slab4 = 30;

    // fixed tax
    let slab3FixedTax = 12500;
    let slab4FixedTax = 112500;

    // Validate the input
    if (incomeInput === "") {
        result.innerHTML = "Please enter your income.";
    } else if (income <= 0) {
        result.innerHTML = "Your income should be greater than zero.";
    }

    // Calculate the tax based on the income

    // no tax (slab 1)
    else if (income <= 250000) {

        let payableTax = 0;
        let takeHomeAmount = income;

        result.innerHTML = `
            Total Income: ₹${income} <br>
            Payable Tax: ₹${payableTax} <br>
            Take Home Amount: ₹${takeHomeAmount}
        `;
    }

    // 5% slab (slab 2)
    else if (income > 250000 && income <= 500000) {

        let taxAbleIncome = income - 250000;
        let payableTax = (slab2 / 100) * taxAbleIncome;
        let takeHomeAmount = income - payableTax;

        result.innerHTML = `
            Total Income: ₹${income} <br>
            Payable Tax: ₹${payableTax} <br>
            Take Home Amount: ₹${takeHomeAmount}
        `;
    }

    // 20% slab (slab 3)
    else if (income > 500000 && income <= 1000000) {

        let taxAbleIncome = income - 500000;
        let payableTax = ((slab3 / 100) * taxAbleIncome) + slab3FixedTax;
        let takeHomeAmount = income - payableTax;

        result.innerHTML = `
            Total Income: ₹${income} <br>
            Payable Tax: ₹${payableTax} <br>
            Take Home Amount: ₹${takeHomeAmount}
        `;
    }

    // 30% slab (slab 4)
    else if (income > 1000000) {

        let taxAbleIncome = income - 1000000;
        let payableTax = ((slab4 / 100) * taxAbleIncome) + slab4FixedTax;
        let takeHomeAmount = income - payableTax;

        result.innerHTML = `
            Total Income: ₹${income} <br>
            Payable Tax: ₹${payableTax} <br>
            Take Home Amount: ₹${takeHomeAmount}
        `;
    }

}