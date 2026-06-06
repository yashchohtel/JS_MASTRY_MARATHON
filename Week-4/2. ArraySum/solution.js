// function to calculate the sum of numbers entered in the input field
calculateSum = (numArr) => {

    // initialize sum variable
    let sum = 0;

    // loop through the array and add each number to the sum
    for (let i = 0; i < numArr.length; i++) {
        sum += Number(numArr[i]); // convert string to number and add to sum
    }

    // return the calculated sum
    return sum;

}


getSum = () => {

    // get the value from input field
    const input = document.getElementById("number").value;

    // select result element
    const result = document.getElementById("result");

    // check if the input is empty    
    if (input === "") {
        result.innerHTML = "Please enter some numbers separated by commas.";
        return;
    }

    // split the input by commas and trim whitespace
    let numberArray = input.split(",").map(item => item.trim());

    // only numbers seprated by commas are allowed
    for (let i = 0; i < numberArray.length; i++) {

        // inditividual value
        const value = numberArray[i];

        if (isNaN(value)) {
            result.innerHTML = "Please enter only numbers separated by commas.";
            return; // stop further execution if invalid input is found
        }

    }

    // calculate the sum using the calculateSum function
    const sum = calculateSum(numberArray);

    // display the result
    result.innerHTML = `The sum of the ${numberArray} is: ${sum}`;

}