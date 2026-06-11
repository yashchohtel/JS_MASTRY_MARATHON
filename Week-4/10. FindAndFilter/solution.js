// function to find first occurrence of target
findFirst = (arr, target) => {

    // loop the array
    for (let i = 0; i < arr.length; i++) {

        // current element
        const element = arr[i];

        // return index if target found
        if (element === target) {
            return i;
        }

    }

    // return -1 if target not found
    return -1;

}

// function to find the index of the target element
getFirstMatch = () => {

    // get the input
    const input = document.getElementById("findArray").value;
    const target = document.getElementById("target").value;

    // result element
    const result = document.getElementById("findResult");

    // empty validation check
    if (input.trim() === "" || target.trim() === "") {
        result.innerHTML = "Please fill all fields";
        return;
    }

    // array to store charater 
    let array = input.split(",").map(item => item.trim());

    // call findFirst function
    let index = findFirst(array, target);

    // display result
    result.innerHTML = index;

}

/* -------------------------------- */

// function to return numbers above threshold
filterAbove = (numbers, threshold) => {

    // array to store result
    let result = [];

    // loop the array
    for (const number of numbers) {

        // add number if it is above threshold
        if (number > threshold) {
            result.push(number);
        }

    }

    // return filtered array
    return result;

}

// functon the filter the element which are avobe the thresshold
getFilteredNumbers = () => {

    // get input value
    const input = document.getElementById("numbers").value;
    const threshold = document.getElementById("threshold").value;
    const result = document.getElementById("filterResult");

    // empty validation check
    if (input.trim() === "" || threshold.trim() === "") {
        result.innerHTML = "Please fill all fields";
        return;
    }

    // array to store number seprated by coma
    let numberArray = input.split(",").map(item => item.trim());

    // correct input validation
    for (const value of numberArray) {

        if (value === "" || isNaN(value)) {
            result.innerHTML =
                "Please enter only numbers separated by commas";
            return;
        }

    }

    // show error if only one element
    if (numberArray.length === 1) {
        result.innerHTML = "Please enter more numbers. Eg. 1,2,3,4,5";
        return;
    }

    // convrtin element into number
    numberArray = numberArray.map(Number);

    // call filterAbove 
    let filtered = filterAbove(numberArray, Number(threshold))

    // if no number is above threshold
    if (filtered.length === 0) {
        result.innerHTML = "No number above threshold";
    }

    // if all numbers are above threshold
    else if (filtered.length === numberArray.length) {
        result.innerHTML = "All numbers are above threshold";
    }

    // otherwise display filtered numbers
    else {
        result.innerHTML = `these numbers are above threshold ${filtered}`;
    }

}