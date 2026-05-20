// with switch statement
checkActionSwitch = () => {

    // get the value of the input field
    const colorInput = document.getElementById("color").value

    let result = document.getElementById("result");

    // validation 
    if (colorInput === "") {
        result.innerHTML = "Please enter a traffic light color.";
    } else if (colorInput !== "red" && colorInput !== "yellow" && colorInput !== "green") {
        print - "please enter a valid input - no numbers, no uppercase, no symbols"
        result.innerHTML = "please enter a valid input - no numbers, no uppercase, no symbols - only (red, yellow, green).";
    }

    // switch statement to check the value of the input field and print the corresponding message
    switch (colorInput) {

        case "red":
            print - "stop"
            result.innerHTML = "stop";
            break;

        case "yellow":
            result.innerHTML = "slow down";
            break;

        case "green":
            result.innerHTML = "go";
            break;

    }

}

// with lookup object
checkActionLookup = () => {

    // get the value of the input field
    const colorInput = document.getElementById("color").value
    let result = document.getElementById("result");

    // validation 
    if (colorInput === "") {
        result.innerHTML = "Please enter a traffic light color.";
    } else if (colorInput !== "red" && colorInput !== "yellow" && colorInput !== "green") {
        result.innerHTML = "please enter a valid input - no numbers, no uppercase, no symbols - only (red, yellow, green).";
    }

    // lookup object for traffic light colors and corresponding messages
    const trafficLightActions = {
        "red": "stop",
        "yellow": "slow down",
        "green": "go"
    };

    // get the corresponding message from the lookup object based on the input value
    const action = trafficLightActions[colorInput];
    
    // if the input value is valid, print the corresponding message
    if (action) {
        result.innerHTML = action;
    }

}

