function getTicketPrice() {

    let ageInput = document.getElementById("age").value;
    let age = Number(ageInput);
    let selectedShow = document.querySelector('input[name="show"]:checked');
    let showTime = "";
    let result = document.getElementById("result");

    let childSeniorPrice = 100;
    let everyoneElsePrice = 250;
    let matineeDiscount = 20; // 20%
    let childSeniorMatineeDisPrice = childSeniorPrice - (childSeniorPrice * matineeDiscount / 100);
    let everyoneElseMatineeDisPrice = everyoneElsePrice - (everyoneElsePrice * matineeDiscount / 100);

    if (ageInput == "" || !selectedShow) {
        result.innerHTML = "🥹 Please enter your age and select a show time.";
        return;
    } else if (age <= 0) {
        result.innerHTML = "🙄 please enter a valid age.";
        return;
    } else if (age < 12 || age > 60) {

        showTime = selectedShow.value;

        if (showTime === "matinee") {

            result.innerHTML = `
                    Base Price - ₹${childSeniorPrice}
                    <br>
                    Matinee Discount - ${matineeDiscount}%
                    <br>
                    Final Price - ₹${childSeniorMatineeDisPrice}`;

        } else {

            result.innerHTML = `
                    Base Price - ₹${childSeniorPrice}
                    <br>
                    Matinee Discount - 0%
                    <br>
                    Final Price - ₹${childSeniorPrice}`;
        }

    } else if (age >= 12 && age <= 60) {

        showTime = selectedShow.value;

        if (showTime === "matinee") {

            result.innerHTML = `
                    Base Price - ₹${everyoneElsePrice}
                    <br>
                    Matinee Discount - ${matineeDiscount}%
                    <br>
                    Final Price - ₹${everyoneElseMatineeDisPrice}`;

        } else {

            result.innerHTML = `
                    Base Price - ₹${everyoneElsePrice}
                    <br>
                    Matinee Discount - 0%
                    <br>
                    Final Price - ₹${everyoneElsePrice}`;
        }

    }

}