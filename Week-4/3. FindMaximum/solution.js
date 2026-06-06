// function to check if all the elements of the array are same or not
let isSame = (arr) => {

    console.log(arr);
    
    // initialize a variable to check if all the elements are equal or not
    let equal = true;

    // loop the array to check if all the elements are equal or not
    for (let i = 1; i < arr.length; i++) {

        // get the element of the array
        const element = arr[i];

        console.log(element);

        // check if the element is not equal to the first element of the array
        if (element !== arr[0]) {
            equal = false;
            break
        }

    }

    // return the result
    return equal;

}

// function to find the maximum of the numbers
findMaximum = (numArr) => {

    // let the first element of the array as the maximum
    let max = numArr[0];

    // loop the array to find the maximum
    for (let i = 1; i < numArr.length; i++) {

        // get the element of the array
        const element = numArr[i];

        // check if the element is greater than the maximum
        if (element > max) {
            max = element; // update the maximum
        }

    }

    // return the maximum
    return max;

}

// function to get the maximum number from the input field
getMaximum = () => {

    // get the value from input field
    const input = document.getElementById("number").value;

    // select result element
    const result = document.getElementById("result");

    // check if the input is empty    
    if (input === "") {
        result.innerHTML = "Please enter some numbers separated by commas.";
        return;
    }

    // if only one number is entered, then that number is the maximum
    if (input.length === 1) {
        result.innerHTML = `please enter more then one number`;
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

    // check if all the numbers are same or not
    if (isSame(numberArray)) {
        result.innerHTML = "All the numbers are same. Please enter different numbers to find the maximum.";
        return;
    }

    // find the maximum using the findMaximum function
    const max = findMaximum(numberArray);

    // display the result
    result.innerHTML = `The maximum of the ${numberArray} is: ${max}`;

}


