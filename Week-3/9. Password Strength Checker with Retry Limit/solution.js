// create array to store failure reasons
let reasons = [];

// variable to store total attempts left
let attemptsLeft = 3;

// variable to store attempt count
let attempts = 0;

// variable to determine success or failure
let success = false;

// select the element to display the result
let result = document.querySelector("#result");

function checkStrength() {

    // clear the reasons array for each attempt
    reasons = [];

    // clear the result display for each attempt
    result.innerHTML = "";

    // get the password from the user
    let password = document.querySelector("#password").value;

    // validate input field for empty
    if (password === "") {
        result.innerHTML = "Please enter a password.";
        return;
    }

    // check length if attempts are left and success is not achieved
    if (attemptsLeft > 0 && !success) {

        // increment attempt count
        attempts++;

        // check for length
        if (password.length < 8) {
            reasons.push("Password must be at least 8 characters long.");
        }

        // check for digit
        let hasDigit = false;
        for (let char of password) {

            if (char >= '0' && char <= '9') {
                hasDigit = true;
                break;
            }

        }

        // if no digit found, add reason
        if (!hasDigit) {
            reasons.push("Password must contain at least one digit.");
        }

        // check for uppercase letter
        let hasUppercase = false;
        for (let char of password) {

            if (char >= 'A' && char <= 'Z') {
                hasUppercase = true;
                break;
            }

        }

        // if no uppercase letter found, add reason
        if (!hasUppercase) {
            reasons.push("Password must contain at least one uppercase letter.");
        }



        // set sucess and show result
        if (reasons.length == 0) {
            success = true
        } else {
            attemptsLeft--;
            result.innerHTML = "Password is weak. Reasons: <br>" + reasons.join("<br>") + "<br> Attempts left: " + attemptsLeft;
        }

    }

    if (success) {
        result.innerHTML = "Password is strong!" + "<br> Attempts taken: " + attempts;
    } else {

        if (attemptsLeft == 0){
            result.innerHTML += "<br> account locked after 3 failed attempts.";
        }

    }

}