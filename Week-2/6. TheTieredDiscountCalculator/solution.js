calculateDiscount = () => {

    const totalValueInput = document.getElementById('totalValue').value;
    const cartValue = Number(totalValueInput);
    let result = document.getElementById("result");

    let discount = 0;
    let finalAmount = 0;

    // validation
    if (totalValueInput === "") {
        result.innerHTML = "Please enter the total cart value.";
    } else if (isNaN(cartValue) || cartValue <= 0) {
        result.innerHTML = "Please enter a valid positive number, Or number should be greater then zero.";
    }

    // calculate discount based on cart value
    else if (cartValue < 500) {

        discount = 0;
        finalAmount = cartValue;
        result.innerHTML = `No discount applied. Final amount: ₹${finalAmount.toFixed(2)}`;

    } else if (cartValue >= 500 && cartValue < 2000) {

        // 5% discount
        discount = (5 / 100) * cartValue;
        finalAmount = cartValue - discount;
        result.innerHTML = `5% discount applied. Final amount: ₹${finalAmount.toFixed(2)}`;

    } else if (cartValue >= 2000 && cartValue < 5000) {

        // 10% discount
        discount = (10 / 100) * cartValue;
        finalAmount = cartValue - discount;
        result.innerHTML = `10% discount applied. Final amount: ₹${finalAmount.toFixed(2)}`;

    } else if (cartValue >= 5000) {

        // 15% discount
        discount = (15 / 100) * cartValue;
        finalAmount = cartValue - discount;
        result.innerHTML = `15% discount applied. Final amount: ₹${finalAmount.toFixed(2)}`;

    }

}