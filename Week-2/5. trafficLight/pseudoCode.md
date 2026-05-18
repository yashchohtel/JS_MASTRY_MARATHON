5. The Traffic Light Action :-

User enters a color: red, yellow, or green. Print "Stop," "Slow down," or "Go." Anything else → "Invalid signal."
Solve this twice — once with switch, once with a lookup object. Notice which one feels cleaner.
EDGES capitalization ("RED" vs "red"), empty string, numbers as input

---

INPUT :-

• Text input (red, yellow, green)

PROCESS :-

• get the input
• validate the input field for being empty
• Check for invalid inputs other then (red yellow and green)
• Check for capitalization input should be in lower case

OUTPUT :-

• print the acton according to colors

EDGE :-
• EDGES capitalization ("RED" vs "red"), empty string, numbers as input

---

PSEUDOCODE :-

<!-- with switch case ------------------------------------- -->

get the input from the user and store it in variable name colorInput

<!-- validation -->

IF (colorInput === "")
    print - "please fill the field"
ELSE IF (colorInput !== "red" && colorInput !== "yellow" && colorInput !== "green")
    print - "please enter a valid input - no numbers, no uppercase, no symbols"
ELSE IF

<!-- action -->

switch(colorInput) {

    case "red":
        print - "stop"
        break;

    case "yellow":
        print - "slow down"
        break;

    case "green":
        print - "go"
        break;

}

<!-- witch lookup object ------------------------------------- -->

get the input from the user and store it in variable name colorInput

<!-- lookup object -->

const trafficSignal = {
red: "Stop",
yellow: "Slow down",
green: "Go"
};

<!-- validation -->

IF (colorInput === "")
    print - "please fill the field"
ELSE IF (colorInput !== "red" && colorInput !== "yellow" && colorInput !== "green")
    print - "please enter a valid input - no numbers, no uppercase, no symbols"

print - trafficSignal[colorInput];