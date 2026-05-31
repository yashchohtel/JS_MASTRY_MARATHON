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

<!-- validate the input for being empty zero and negative -->

IF (numInput == "")
print - "please fill the field"

<!-- if num is less then zero -->

ELSE IF (num > 2)
print - "no prime numbers"

<!-- if num is equal to 2 -->

ELSE IF (num == 2)
print - "2 is the only printe till 2"

<!-- find the prime number betwwen 2 to n -->
ELSE {

    <!-- loop the number to find the prime number -->

    // outer loop
    lfor (let i = 1; i <= num; i++) {

        <!-- a variable to store the count how many time a number is fully divisible -->
        let divisibleCount = 0;

        <!-- loop equal to the count of current number of outer loop  -->
        for (let j = 1; j <= i; j++) {

            if (i % j === 0) {
                divisibleCount++
            }

        }

        if (divisibleCount === 2) {
            print - `${j} is prime number`   
        }
    }

}
