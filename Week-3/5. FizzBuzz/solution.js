function fizzBuzz() {

    let result = document.getElementById("result");

    result.innerHTML = "";

    for (let num = 1; num <= 30; num++) {

        if (num % 3 === 0 && num % 5 === 0) {
            result.innerHTML += `<p>${num} - FizzBuzz</p>`;
        }

        else if (num % 3 === 0) {
            result.innerHTML += `<p>${num} - Fizz</p>`;
        }

        else if (num % 5 === 0) {
            result.innerHTML += `<p>${num} - Buzz</p>`;
        }

        else {
            result.innerHTML += `<p>${num}</p>`;
        }

    }

}