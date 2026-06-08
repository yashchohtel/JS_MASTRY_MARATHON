// function to find the array has number or not
onlyTextValidation = (arr) => {

    for (let i = 0; i < arr.length; i++) {

        // current element of the array
        const element = arr[i];

        // set hasNumber true when number occurs
        if (!isNaN(element)) {
            return true
        }

    }

    // return has num or not
    return false

}

//  function to find accurence of character in array
countOccurence = (arr, target) => {

    // variable to store count
    let count = 0;

    //  loop the array to find the count
    for (let i = 0; i < arr.length; i++) {

        // current element
        const element = arr[i]

        // increment count if target is === to current element
        if (element === target) {
            count++
        }

    }

    //  return count
    return count;

}

// function to validate input field and call onlyTextValidation, countOccurence funciton
getOccurence = () => {

    // get the value from the input field
    const word = document.getElementById("word").value;
    const char = document.getElementById("char").value;

    // select result element
    const result = document.getElementById("result");

    // check if the input field is empty or not
    if (word === "" || char === "") {
        result.innerText = "Please fill all the fields";
        return;
    }

    // split the input by commas and trim whitespace
    let charArray = word.split("").map(item => item.trim());

    // check if the input has number or not
    if (onlyTextValidation(charArray)) {
        result.innerText = "Please enter only text in the word field";
        return;
    }

    // validate target contains only one English alphabet
    if (char.length !== 1 || !isNaN(char)) {
        result.innerText = "Please enter only one English alphabet in the target field.";
        return;
    }

    // call the countOccurence function to find the count of target in the array
    const count = countOccurence(charArray, char);

    // display the result
    result.innerText = `The character "${char}" occurs ${count} times in the word "${word}".`;

}

// call the getOccurence function when button is clicked
document.getElementById("button").addEventListener("click", getOccurence);