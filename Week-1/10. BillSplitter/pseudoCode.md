10) The Restaurant Bill Splitter

→ Total bill amount
→ Number of people
→ Whether to add tip (yes/no) — if yes, add 10%

Output: total with tip (if any), per person amount

EDGES 0 people, 0 bill, just one person

PLAIN-ENGLISH DECOMPOSITION  ↓↓↓↓↓↓

INPUTS:
• Get the bill amount
• Get the number of people

PROCESS:
• Validate for being empty, zero and negative
• first check if the user ok for tip or not 
• if tip - calculate 15% tip by this(number × percentage) / 100 and devide beteen number of people
• else devide total bill with the number of people

OUTPUT:
• bill per person with tip amount 

EDGES:
• 0 people, 0 bill, just one person

PSEUDOCODE ↓↓↓↓↓↓

Get the bill amount
Get the number of people
Get if tip is added or not (checkbox - true/false)

IF (billInput === "" || peopleInput === "") {
    print - "Please enter both bill amount and number of people."
} ELSE IF (bill <= 0 || people <= 0) {
    print - "Bill amount and number of people must be greater than zero."
ELSE IF (people == 1)
    IF(tipChicked)
        print - bill with tip
    ELSE
        print - total bill
ELSE
    IF (tipChecked)
        print - tip, totalBill, bill per person
    ELSE    
        print - totalBill, bill per person