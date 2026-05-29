function getSum() {

    // Get the number 
    let numInput = document.getElementById("num").value;
    let num = Number(numInput);
    let result = document.getElementById("result");

    // accumulator to store sum
    let accumulator = 0;

    // empty input validation check
    if (numInput === "") {
        result.innerHTML = "❌ Please fill all fields";
        return;
    }

    // positive number sum
    if (num >= 0) {

        // calculate the sum
        for (let i = 0; i <= num; i++) {
            accumulator = accumulator + i
        }

    }

    // negative number sum
    else {

        // calculate the sum
        for (let i = num; i <= 0; i++) {
            accumulator = accumulator + i
        }

    }

    result.innerHTML = `total sum of 0 to ${num} is = ${accumulator}`

}