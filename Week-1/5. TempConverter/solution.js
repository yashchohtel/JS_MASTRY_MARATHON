function convertTemperature() {

    let tempInput = document.getElementById("temp").value;
    let temp = Number(tempInput);
    let result = document.getElementById("result");

    if (tempInput === "") {
        result.innerHTML = "❌ Please fill the field";
    } else if (isNaN(temp)) {
        result.innerHTML = "❌ Please enter a valid temperature";
    } else {

        let fahrenheit = (temp * 9 / 5) + 32;

        if (temp === 0) {

            result.innerHTML = `
                    ${temp}°C = ${fahrenheit}°F
                    <br>
                    0°C is the freezing point of water 🧊`;

        } else if (temp < 0) {

            result.innerHTML = `
                    ${temp}°C = ${fahrenheit}°F
                    <br>
                    Extreme cold 🥶`;

        } else if (temp < 15) {

            result.innerHTML = `
                    ${temp}°C = ${fahrenheit}°F
                    <br>
                    Cold weather ❄️`;

        } else if (temp >= 15 && temp <= 30) {

            result.innerHTML = `
                    ${temp}°C = ${fahrenheit}°F
                    <br>
                    Pleasant weather 🌤️`;

        } else if (temp > 30 && temp < 50) {

            result.innerHTML = `
                    ${temp}°C = ${fahrenheit}°F
                    <br>
                    Hot weather 🔥`;

        } else if (temp >= 50) {

            result.innerHTML = `
                    ${temp}°C = ${fahrenheit}°F
                    <br>
                    Extreme heat ☀️🥵`;
        }

    }

}
