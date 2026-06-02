10. ATM PIN Block-Out :-

Simulate an ATM PIN entry. Correct PIN is "4231". User has 3 tries. On each wrong try, tell them how
many attempts are left. On the 3rd wrong try, block the card and show: "Card blocked. Contact your
branch."

EDGES
• Correct PIN on attempt 1 (don't burn the other 2 attempts)
• Empty input
• User enters non-numeric input

HINT
This is the Counter + Search combo. The while exits on EITHER attemptsLeft = 0 OR correct PIN.
Two exit conditions — same shape as the Star problem.

---

INPUT :-

• get the pin from the user

PROCESS :-

• get the pin
• validate the enput for being empyt
• compare with the real pin and show result

OUTPUT :-

• succes/failure message and attempt left

EDGE :-

• Correct PIN on attempt 1 (don't burn the other 2 attempts)
• Empty input
• User enters non-numeric input

---

PSEUDOCODE :-

<!-- variable to store maximum attempts -->

maxAttempts = 3;

<!-- blocked status -->

isBlocked = false;

<!-- original pin -->

originalPin = "4321";

<!-- function to validate password -->

FUNCTION {

    <!-- get the pin data -->
    pinInput = document.getElementById("num").value;
    result = document.getElementById("result");

    <!-- empty validation check -->
    IF (pinInput === ""){
        print - "please enter you four ditig pin"
    }

    <!-- Check if the PIN is correct -->
    ELSE{
        
        IF (maxAttempts > 0){

            IF (pin === originalPin){
                print - "PIN is correct. Access granted."
            }

            ELSE {

                <!-- decrease attempts -->
                maxAttempts--;

                <!-- show error -->
                print - `Incorrect PIN. You have ${maxAttempts} attempts left.`;
            }

        } 

        <!-- show atm block error -->
        ELSE{

            print - "Card blocked. Contact your branch."

        }

    }

}
