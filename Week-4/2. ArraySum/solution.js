getSum = () => {

    // get the value from input field
    const input = document.getElementById("number").value;

    // select result element
    const result = document.getElementById("result");

    // split the input by commas and trim whitespace
    let numberArray = input.split(",").map(item => item.trim());

    // check if the input is empty    
    if (input === "") {
        result.innerHTML = "Please enter some numbers separated by commas.";
        return;
    }

    // only numbers seprated by commas are allowed
    for (let i = 0; i < numberArray.length; i++) {

        // inditividual value
        const value = numberArray[i];

        if (value === "" || isNaN(value)) {
            result.innerHTML = "Please enter only numbers separated by commas.";
            return; // stop further execution if invalid input is found
        }

    }

    console.log(numberArray);

}