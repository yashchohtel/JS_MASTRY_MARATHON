function calculate() {

    let num1Input = document.getElementById("num1").value;
    let num2Input = document.getElementById("num2").value;
    let num1 = Number(num1Input);
    let num2 = Number(num2Input)
    let operator = document.getElementById("operator").value;
    let result = document.getElementById("result");

    if (num1Input === "" || num2Input === "") {

        result.innerHTML = "❌ Please fill all the fields";

    } else if (operator === "/" && num2 === 0) {

        result.innerHTML = "❌ Cannot divide by zero";

    } else {

        let finalAnswer;

        if (operator === "+") {
            finalAnswer = num1 + num2;
        } else if (operator === "-") {
            finalAnswer = num1 - num2;
        } else if (operator === "*") {
            finalAnswer = num1 * num2;
        } else if (operator === "/") {
            finalAnswer = num1 / num2;
        }

        result.innerHTML = `${num1} ${operator} ${num2} = ${finalAnswer}`;
    }

}