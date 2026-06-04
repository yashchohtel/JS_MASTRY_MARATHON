// funciton to get squqre and cube of a number
function square(num) {
    return num ** 2;
}

function cube(num) {
    return num ** 3;
}

// function to get the input number and display the result
function squareAndCube() {

    // get the input number
    let numInput = document.getElementById("num").value;
    let num = Number(numInput);

    // result element
    let result = document.getElementById("result");

    // empty and zero input validation
    if (numInput === "") {
        result.innerHTML = "Please enter a number.";  
        return;
    } else if (num === 0) {
        result.innerHTML = "please enter a non zero number.";
        return;
    }

    // get the square and cube of the number
    let squareResult = square(num);
    let cubeResult = cube(num);

    // display the result
    result.innerHTML = `Square: ${squareResult} <br> Cube: ${cubeResult}`;

}


