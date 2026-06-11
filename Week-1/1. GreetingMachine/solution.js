function greetUser() {

    let name = document.getElementById("name").value;
    let ageInput = document.getElementById("age").value;
    let age = Number(ageInput);
    let result = document.getElementById("result");

    if (name.trim() === "" || ageInput.trim() === "") {

        result.innerHTML = "❌ Please fill all fields";

    } else if (age <= 0) {

        result.innerHTML = "❌ Age must be greater than 0";

    } else {

        let futureAge = age + 10;

        result.innerHTML = `
                Hi ${name}, you are ${age} years old.
                <br>
                You will be ${futureAge} in 10 years.
                `;
    }
}