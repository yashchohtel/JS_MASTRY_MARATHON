function findEvenOdd() {

    let numInput = document.getElementById("num").value;
    let num = Number(numInput);
    let result = document.getElementById("result");

    if (numInput.trim() === "") {

        result.innerHTML = "❌ Please fill the field";

    } else if (isNaN(num)) {

        result.innerHTML = "❌ Please enter a valid number";

    } else if (num === 0) {

        result.innerHTML = "🫡 0 is SPECIAL! It is neither Even nor Odd.";

    } else if (num % 2 === 0) {

        result.innerHTML = `✅ ${num} is an Even number`;

    } else {

        result.innerHTML = `✅ ${num} is an Odd number`;

    }

}