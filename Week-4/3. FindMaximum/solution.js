let isSame = (arr) => {

    let equal = true;

    for (let i = 1; i < arr.length; i++) {

        const element = arr[i];

        if (element !== arr[0]) {
            equal = false;
            console.log("not equal" + " " + element);
            break
        }

    }

    let result = equal ? "all are equal" : "all are not equal"

    return result;

}













// function to find the maximum of the numbers
findMaximum = (numArr) => {



}








printTable = () => {

    // select the result element to show result
    let result = document.querySelector("#result")
    result.innerHTML = "";

    // get the number
    let tableNumInput = document.querySelector("#num").value;
    let tableNum = Number(tableNumInput)

    // empty validation
    if (tableNumInput === "") {
        result.innerHTML = "Please enter a number";
    }

    // negative validation
    else if (tableNum < 0) {
        result.innerHTML = "Number should be positive";
    }

    // print table
    else {

        // loop the number to print table
        for (let i = 1; i <= 10; i++) {
            result.innerHTML += `<p>${tableNum} x ${i} = ${tableNum * i}</p>`;
        }

    }

}