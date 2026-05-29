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
    else if (tableNum < 0){
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