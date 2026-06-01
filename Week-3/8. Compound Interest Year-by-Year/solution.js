// slider and tooltip script
const tooltip = document.getElementById("tooltip");
const slider = document.getElementById("rateRange");
const rateInput = document.getElementById("rateInput");

function updateTooltip() {

    // get value
    const value = slider.value;

    // set in tooltip box
    tooltip.textContent = `${value}%`;

    // calculate percentage
    const percent = (value - slider.min) / (slider.max - slider.min);

    // get slider width
    const sliderWidth = slider.offsetWidth;

    // set tooltip position
    tooltip.style.left = `${percent * sliderWidth}px`;

}

// initial call
updateTooltip();

// call function on every input
slider.addEventListener("input", () => {
    rateInput.value = slider.value;
    updateTooltip();
});

// insert the input value in slider
rateInput.addEventListener("input", () => {
    slider.value = rateInput.value;
    updateTooltip();
});

/* compound intrest calculation ----------------------- */

calculateTotal = () => {

    let amountInput = document.querySelector("#amount").value;
    let amount = Number(amountInput)

    let intrestInput = document.querySelector("#rateInput").value;
    let intrest = Number(intrestInput);

    let TenureInput = document.querySelector("#tenure").value;
    let tenure = Number(TenureInput);

    // select result box
    let result = document.querySelector("#result");
    let total = document.querySelector("#total");

    // empty validation
    if (amountInput === "" || intrestInput === "" || TenureInput === "") {
        result.innerHTML = "❌ Please fill all fields";
    }

    // zero and nevative validation
    else if (amount <= 0 || intrest < 0 || tenure <= 0) {
        result.innerHTML = "❌ Amount and tenure must be greater than 0. Interest cannot be negative";
    }

    // if intrest is greater than 20%
    else if (intrest > 20) {
        result.innerHTML = "❌ Interest rate cannot be greater than 20%";
    }

    // calculate compound intrest
    else {

        let totalAmount = 0;
        result.innerHTML = "";

        // Year 0
        result.innerHTML += `<p>Year 0 : ₹${amount.toFixed(2)}</p>`;

        // Calculate yearly growth
        for (let year = 1; year <= tenure; year++) {
            amount = amount + (amount * intrest / 100);
            totalAmount = amount;
            result.innerHTML += `  <p>Year ${year} : ₹${amount.toFixed(2)}</p> `;
        }

        total.innerHTML = `Total Amount: ₹${totalAmount.toFixed(2)}`;
    }

}