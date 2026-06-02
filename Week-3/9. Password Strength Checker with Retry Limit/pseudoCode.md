9. Password Strength Checker with Retry Limit :-

WHY THIS IS THE STAR
It forces nested loops AND combines 3 loop patterns — Counter (attempts), Search (scan for
digit/uppercase), and Conditional Exit. Get this right, and loops stop being scary forever.

Build a password validator. The user has 3 attempts to create a strong password. A strong password must:
• Be at least 8 characters
• Contain at least one digit (0–9)
• Contain at least one uppercase letter (A–Z)
If they enter a weak password, tell them WHY it's weak (which rules failed). After 3 failed attempts, lock
them out. On success, say which attempt succeeded.

EDGES
• Empty password
• Password fails multiple rules at once (show ALL reasons, not just the first)
• Success on attempt 1 vs attempt 3
• User exhausts all 3 attempts

HINT
Draw the structure FIRST. Don't open your editor for 10 minutes. You need: an OUTER while loop
(attempts), and INSIDE it, FOR loops that scan the password. If you skip the drawing, you'll write
80 lines of tangled if/else and still have bugs

---

INPUT :-

• password as string

PROCESS :-

• validate the input field for being empty
• check the pasword length
• check the existence of digit and uppercase character
• show result

OUTPUT :-

• success and failure message and failure resion

EDGE :-

EDGES
• Empty password
• Password fails multiple rules at once (show ALL reasons, not just the first)
• Success on attempt 1 vs attempt 3
• User exhausts all 3 attempts

---

PSEUDOCODE :-

<!-- create array to store failur reason -->

reason = []

<!-- a variable to store total number of attempt -->

attemptLeft = 3;

<!-- variable to store attempt count -->

attempts = 0;

<!-- variable to determine attempt success or faliuer -->

success = false;

<!-- get the password from the user -->

password = document.querySelector(#password).value;

<!-- validate input field for empty -->

IF (password == "")
print - "please enter the password"

<!-- check password strength if success false and attemp left -->

IF(attemptLeft > 0 && !success){

    <!-- check password length -->
    IF(password.length < 8){
        reason.push("password must be eight characters long")
    }

    <!-- check digit existience -->
    hasDigit = false;

    <!-- loop the password to find digit -->
    if character is digit
        hasDigit = ture

    <!-- set reason for digit -->
    IF (!hasDigit){
        reason.push("password must contain at lest 1 digit")
    }

    <!-- check uppercase -->
    hasUpper = false

    <!-- loop the password to find uppercase -->
    if character is digit
        hasDigit = false

    <!-- set reason for uppercase -->
    IF (!hasUpper){
        reason.push("password must contain at least 1 uppercase character")
    }

    <!-- set sucess and show result -->
    IF (reason.length ==0)
        SET success = true
    ELSE
       attemptLeft --
       print - reason + attempsLeft remaining


    IF (success) 
        SHOW "Password set successfully"
    ELSE
        SHOW "Account Locked: too many failed attempts"

}
