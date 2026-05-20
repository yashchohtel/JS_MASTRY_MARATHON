calculateTax = () => {

    // Get the income value from the input field
    let incomeInput = document.getElementById("income").value;
    let income = Number(incomeInput);
    let result = document.getElementById("result");

    // Validate the input
    if(incomeInput === ""){
        result.innerHTML = "Please enter your income.";
    } else if(income <= 0){
        result.innerHTML = "Your income should be greater than zero.";
    }

    // Calculate the tax based on the income

}