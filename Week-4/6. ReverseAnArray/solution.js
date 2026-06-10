// function to reverse the array
reversedArr = (arr) => {

    // array to store reverse element
    let reversedArr = [];

    // loop the arr from last
    for (let i = arr.length - 1; i >= 0; i--) {

        // push current elemnt into array
        reversedArr.push(arr[i])

    }

    // return reversedArr
    return reversedArr;

}

// funciton to get the input value and validaiton and reverse the array
getReversed = () => {

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
    
    // show error is only one element 
    if (numberArray.length === 1) {
        result.innerHTML = "Please enter more than one number."
        return;
    }

    // call reversedArr function
    const reversed = reversedArr(numberArray);

    // display the result
    result.innerHTML = `reversed of [${numberArray}]  is:  [${reversed}]`;

}