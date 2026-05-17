knowBMI = () => {

    // get input values and result div
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let heightInMeter = Number(height) / 100;
    let result = document.getElementById("result");

    // validate input value for being empty
    if (weight === "" || height === "") {
        result.innerHTML = "Please enter both Weight and Height.";
    }

    // validate input value for being negative or zero
    else if (weight <= 0 || height <= 0) {
        result.innerHTML = "Weight and Height must be greater then zero.";
    }

    // calculate BMI and classify
    else {

        let bmi = Number(weight) / (heightInMeter * heightInMeter);

        if (bmi < 18.5) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are underweight.`;
        } else if (bmi >= 18.5 && bmi < 25) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are normal weight.`;
        } else if (bmi >= 25 && bmi < 30) {
            result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are overweight.`;
        } else {
            result.innerHTML = `Your BMI is ${bmi.toFixed(2)}. You are obese.`;
        }

    }

}