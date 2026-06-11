function calculateBill() {

    let unitInput = document.getElementById("unit").value;
    let unit = Number(unitInput);
    let result = document.getElementById("result");

    if (unitInput === "") {

        result.innerHTML = "❌ Please fill the field";

    } else if (unit < 0) {

        result.innerHTML = "❌ Unit should be greater than zero";

    } else if (unit >= 300) {

        let totalBill = (100 * 3) + (100 * 5) + (100 * 7) + ((unit - 300) * 10);

        result.innerHTML = `
                First 100 Units → ₹${100 * 3}
                <br>
                Next 100 Units → ₹${100 * 5}
                <br>
                Next 100 Units → ₹${100 * 7}
                <br>
                Above 300 Units → ₹${(unit - 300) * 10} (${unit - 300} remaining units)
                <br><br>
                ✅ Total Bill → ₹${totalBill}`;

        if (unit >= 500) {

            result.innerHTML += `<br><br>🔥 Very High Consumption`;
        }

    } else if (unit >= 200) {

        let totalBill = (100 * 3) + (100 * 5) + ((unit - 200) * 7);

        result.innerHTML = `
                First 100 Units → ₹${100 * 3}
                <br>
                Next 100 Units → ₹${100 * 5}
                <br>
                ${unit > 200 ? `Remaining Units → ₹${(unit - 200) * 7} (${unit - 200} remaining units) <br><br>` : ""}
                ✅ Total Bill → ₹${totalBill}`;

    } else if (unit >= 100) {

        let totalBill = (100 * 3) + ((unit - 100) * 5);

        result.innerHTML = `
                First 100 Units → ₹${100 * 3}
                <br>
                ${unit > 100 ? `Remaining Units → ₹${(unit - 100) * 5} (${unit - 100} remaining units) <br><br>` : ""}
                ✅ Total Bill → ₹${totalBill}`;

    } else if (unit < 100) {

        let totalBill = unit * 3;

        result.innerHTML = `⚡ Electricity Bill → ₹${totalBill}`;
    }

}