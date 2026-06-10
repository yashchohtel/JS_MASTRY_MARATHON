// function to remove duplicates
removeDuplicate = (arr) => {

    // array to store result
    let result = []

    // loop the array to check if the 
    arr.forEach(arrElm => {

        // flag to show if the result has the currnt elemt of arr
        let hasElm = false;

        // looping the result to check if the result has the current element of the arr
        for (let i = 0; i < result.length; i++) {

            const resElm = result[i];

            // if the resElm = curElm set hasElm ture
            if (resElm === arrElm) {
                hasElm = true;
                break;
            }

        }

        // if has elm is false then push the arrElm into the result array 
        if (!hasElm) {
            result.push(arrElm)
        }

    });

    // retun result
    return result;

}

// function for input validaiton and calling removeDuplicate and show result
getRemvedDuplicates = () => {

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

        if (value === "" || isNaN(value)) {
            result.innerHTML = "Please enter only numbers separated by commas. Eg. 1,2,3,3";
            return; // stop further execution if invalid input is found
        }

    }

    // show error is only one element 
    if (numberArray.length === 1) {
        result.innerHTML = "Please enter more than one number."
        return;
    }

    // call reversedArr function
    const resultArr = removeDuplicate(numberArray);

    // if all are duplicates
    if (resultArr.length === 1) {
        result.innerHTML = "All elements are same."
        return;
    }

    // if no duplicates
    if (resultArr.length === numberArray.length) {
        result.innerHTML = `no duplicates in this array ${resultArr}`
        return;
    }

    // show result
    result.innerHTML = `duplicate removed array ${resultArr}`

}