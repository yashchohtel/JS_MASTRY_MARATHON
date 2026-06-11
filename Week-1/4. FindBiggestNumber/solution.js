function findBiggestNumber() {

    let num1Input = document.getElementById("num1").value;
    let num2Input = document.getElementById("num2").value;

    let num1 = Number(num1Input);
    let num2 = Number(num2Input);

    let result = document.getElementById("result");


    if (num1Input === "" || num2Input === "") {

        result.innerHTML = "❌ Please fill the field";

    } else if (isNaN(num1) || isNaN(num2)) {

        result.innerHTML = "❌ Please enter a valid number";

    } else if (num1 === num2) {

        result.innerHTML = "🤝 Both numbers are equal";

    } else if (num1 > num2) {

        result.innerHTML = `✅ ${num1} is bigger and ${num2} is smaller`;

    } else if (num1 < num2) {

        result.innerHTML = `✅ ${num1} is smaller and ${num2} is bigger`;

    }

}