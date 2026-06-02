8. Compound Interest Year-by-Year :-

A user invests ₹50,000 at 8% annual interest, compounded yearly. Show the balance at the end of each
year for 10 years.
Year 1: ₹54,000
Year 2: ₹58,320
...

EDGES
• Year 0 (initial balance, before any interest)
• Decimal precision — round to 2 decimals
• Interest rate of 0 (balance stays same)

HINT
Transform pattern over time. Start with balance = 50000. Each year: balance = balance +
balance × 0.08. So clean that most students overthink it.

---

INPUT :-

• amount, tenure, intrest

PROCESS :-

• validate the inputs for bein empty zero and neative
• validate the intrest rate for bein more then 20%
• loop the tenure and calculate per year intrest and total

OUTPUT :-

• Total amount per year (principa + intrest) and total amount

EDGE :-
• Year 0 (initial balance, before any interest)
• Decimal precision — round to 2 decimals
• Interest rate of 0 (balance stays same)

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
