2. Print Prime Numbers Up to N :-

Ask the user for a number N. Print all prime numbers from 2 to N. (A prime is divisible only by 1 and
itself.)

EDGES
• N less than 2 (no primes to print)
• N = 2 (only one prime: 2 itself)
• N is large (1000)

HINT
This is a NESTED loop. Outer loop walks 2 to N. For each number, an inner loop checks if anything
from 2 to that-number-minus-1 divides it cleanly. If nothing does — it's prime.

---

INPUT :-

• get the number input from the user

PROCESS :-

• get the input convert the input into a number
• validate input for being empty negative and zero
• loop the number, it would be the outer loop
• again loop the current number to find how many time a current number is dibisible
• if it is fully divisible 2 time then print it is prime

OUTPUT :-

• prime number 1 to n

EDGE :-
• N less than 2 (no primes to print)
• N = 2 (only one prime: 2 itself)
• N is large (1000)

---

PSEUDOCODE :- LOOP type (transform)

<!-- get all the input and convert them to numbers -->

amountInput = document.querySelector("#amount").value;
amount = Number(amountInput);

interestInput = document.querySelector("#rateInput").value;
interest = Number(interestInput);

tenureInput = document.querySelector("#tenure").value;
tenure = Number(tenureInput);

<!-- validate all fields are filled -->

IF (amountInput == "" OR interestInput == "" OR tenureInput == "")
print - "please fill all fields"

<!-- validate for zero and negative values -->

ELSE IF (amount <= 0 OR interest < 0 OR tenure <= 0)
print - "invalid input"

<!-- validate interest rate -->

ELSE IF (interest > 20)
print - "interest rate cannot be greater than 20%"

<!-- calculate compound interest -->

ELSE {

    <!-- clear previous result -->

    clear result

    <!-- print initial balance -->

    print - "Year 0 : amount"

    <!-- loop till tenure years -->

    FOR (year = 1 TO tenure)

        <!-- calculate new balance -->

        amount = amount + (amount * interest / 100)

        <!-- store latest amount as total amount -->

        totalAmount = amount

        <!-- print yearly balance -->

        print - "Year year : amount"

    END FOR

    <!-- print final amount -->

    print - "Total Amount : totalAmount"

}