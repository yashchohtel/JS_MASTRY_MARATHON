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

PSEUDOCODE :- LOOP type (search)

<!-- get the number input and convert it to the number -->

numInput = document.getElementById("num").value;
num = Number(numInput);

<!-- validate the input for being empty -->

IF (numInput == "")
print - "Please fill the field"

<!-- validate for zero and negative numbers -->

ELSE IF (num <= 0)
print - "please enter a number greater than zero"

<!-- find prime numbers -->

ELSE {

    <!-- clear previous result -->

    clear result

    <!-- loop from 1 to N -->

    FOR (i = 1 TO num)

        <!-- count how many times current number is fully divisible -->

        divisibleCount = 0

        <!-- if N is less than 2 -->

        IF (num < 2)
        print - "no prime number till N"

        <!-- if N is equal to 2 -->

        ELSE IF (num == 2)
        print - "only one prime : 2 itself"

        <!-- check if current number is prime -->

        ELSE {

            <!-- check all divisors from 1 to current number -->

            FOR (j = 1 TO i)

                IF (i is fully divisible by j)
                divisibleCount++

            END FOR

            <!-- a prime number is divisible exactly 2 times -->

            IF (divisibleCount == 2)
            print - "i is a prime number"

        }

    END FOR

}
