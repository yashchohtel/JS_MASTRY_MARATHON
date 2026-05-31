function findPrime() {

    // Get the number 
    let numInput = document.getElementById("num").value;
    let num = Number(numInput);
    let result = document.getElementById("result");

    // empty input validation check
    if (numInput === "") {
        result.innerHTML = "Please fill the field";
    }

    // zero validation check 
    else if (num <= 0) {
        result.innerHTML = "please enter a number greater then zero";
    }

    // find prime number
    else {

        // reset the result element to enter new result
        result.innerHTML = "";

        // loop the number to find print number
        for (let i = 1; i <= num; i++) {

            // how many time a number is fully divisible (if 2 in whole loop means its a prime)
            let divisibleCount = 0;

            // if num is less then 2
            if (num < 2) {
                result.innerHTML = `no prime number till ${num}`;
            }

            // if num is equal to 2
            else if (num === 2) {
                result.innerHTML = "only one prime: 2 itself";
            }

            // check other prime number if number is greater then two
            else {

                // loop equal to the count of current number of outer loop
                for (let j = 1; j <= i; j++) {

                    if (i % j === 0) {
                        divisibleCount++
                    }

                }

                if (divisibleCount === 2) {
                    result.innerHTML += `${i} is a prime number <br>`;
                }

            }

        }
    }

}