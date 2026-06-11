function calculateAge() {

    let ageInput = document.getElementById("age").value;
    let age = Number(ageInput);
    let result = document.getElementById("result");

    if (ageInput === "") {
        result.innerHTML = "❌ Please fill the field";
    } else if (isNaN(age)) {
        result.innerHTML = "❌ Please enter a valid age";
    } else if (age <= 0) {
        result.innerHTML = "❌ Age must be greater than zero";
    } else {

        let months = age * 12;
        let weeks = age * 52;
        let days = age * 365;
        let hours = age * 365 * 24;

        result.innerHTML = `
                your age is ${age} years
                <br>

                Age in Months: ${months}
                <br>

                Age in Weeks: ${weeks}
                <br>

                Age in Days: ${days}
                <br>

                Age in Hours: ${hours}`;
    }

}