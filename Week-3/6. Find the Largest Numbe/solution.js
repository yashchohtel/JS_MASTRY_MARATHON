// array to store numbers to compare
let numArray = [];

function collectNumber() {

    // selecting element to show the direct to input number
    let numberInputMsg = document.querySelector(".numInputMsg");
    numberInputMsg.innerHTML = ""

    // get the input and convert it to nunber
    let numInput = document.querySelector("#num").value;
    let num = Number(numInput);

    // empty validation check
    if (numInput === "") {
        numberInputMsg.innerHTML = "please enter your number"
    }

    // pushing the number in array
    else {

        // push the number
        numArray.push(num);

        // display the message accordingly
        if (numArray.length === 4) {

            numberInputMsg.innerHTML = "Enter your last number";
            document.querySelector("#num").placeholder = "Enter last Number";

        } else {

            numberInputMsg.innerHTML = "Enter your next number";
            document.querySelector("#num").placeholder = "Enter next Number";

        }

        // clear the input field to enter the next number
        document.querySelector("#num").value = "";

        // calculate the result if array length is 5
        if (numArray.length === 5) {

            // variable to store the largest number (store the first element or array to avoid 0 as base for negative)
            let largest = numArray[0];

            for (let i = 0; i < numArray.length; i++) {

                if (numArray[i] > largest) {
                    largest = numArray[i]
                }

            }

            // print the result
            document.querySelector("#result").innerHTML = `the largest number among  ${numArray.join(", ")}  is  ${largest}`

            // empty the array for next calculation
            numArray = [];

            // display message to enter first number to recalculate
            numberInputMsg.innerHTML = "Please enter your first number to find the largest again";
            document.querySelector("#num").placeholder = "Enter first number";

        }

    }

}