let maxAttempts = 3;

const originalPin = "4321";

function validatePin() {

    let pinInput = document.getElementById("num").value;
    let result = document.getElementById("result");

    // empty validation
    if (pinInput === "") {
        result.innerHTML = "Please enter your four digit PIN";
    }

    // check attempts left
    else if (maxAttempts > 0) {

        // correct pin
        if (pinInput === originalPin) {

            result.innerHTML = "PIN is correct. Access granted.";

        }

        // wrong pin
        else {

            maxAttempts--;

            if (maxAttempts > 0) {

                result.innerHTML = `Incorrect PIN. You have ${maxAttempts} attempts left.`;

            } else {

                result.innerHTML = "Card blocked. Contact your branch.";

            }

        }

    }

}