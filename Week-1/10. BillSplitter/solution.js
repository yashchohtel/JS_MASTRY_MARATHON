function calculateBill() {

    let billInput = document.getElementById("amount").value;
    let bill = Number(billInput);
    let peopleInput = document.getElementById("people").value;
    let people = Number(peopleInput);
    let tipChecked = document.getElementById("tip").checked;
    let tipPercantage = 15;
    let result = document.getElementById("result");

    let tip;
    let totalBill;
    let billPerPerson;

    if (billInput === "" || peopleInput === "") {
        result.innerHTML = "Please enter both bill amount and number of people.";
        return;
    } else if (bill <= 0 || people <= 0) {
        result.innerHTML = "Bill amount and number of people must be greater than zero.";
        return;
    } else if (people == 1) {

        if (tipChecked) {

            tip = (bill * tipPercantage) / 100;
            totalBill = bill + tip;

            result.innerHTML = `
                    Bill: ₹${bill}
                    <br>
                    Tip (15%): ₹${tip.toFixed(2)}
                    <br>
                    Total Bill (including tip): ₹${totalBill.toFixed(2)}`;

        } else {

            result.innerHTML = `Total Bill : ₹${bill}`;

        }

    } else {

        if (tipChecked) {

            tip = (bill * tipPercantage) / 100;
            totalBill = bill + tip;
            billPerPerson = totalBill / people;

            result.innerHTML = `
                    Bill: ₹${bill}
                    <br>
                    Tip (15%): ₹${tip.toFixed(2)}
                    <br>
                    Total Bill: ₹${totalBill.toFixed(2)}
                    <br>
                    Bill per person (including tip): ₹${billPerPerson.toFixed(2)}`;

        } else {

            totalBill = bill;
            billPerPerson = totalBill / people;

            result.innerHTML = `
                    Total Bill: ₹${totalBill.toFixed(2)}
                    <br>
                    Bill per person: ₹${billPerPerson.toFixed(2)}`;
        }

    }
}