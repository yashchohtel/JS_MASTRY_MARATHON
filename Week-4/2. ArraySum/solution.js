getSum = () => {

    // get the value from input field
    let numberText = document.getElementById("number").value;

    // split the string into an array of numbers
    console.log(numberText);

    let numberArray = numberText.split(",")
    console.log(numberArray);

    let trimmedNumber = numberArray.map((item) => {
        return item.trim();
    })

    let realNum = trimmedNumber.map((item) => {

        if (!isNaN(item)) {
            return Number(item);
        }

    })

}