9. The Vending Machine :-                                                                                          

Build the logic for a vending machine.
→ Items: Chips 20, Soda 35, Chocolate 50, Water 15 ₹
→ Stock: Chips (3), Soda (0), Chocolate (5), Water (2)
→ User enters: item name + amount of money

Your code must:
→ 1. Check if the item exists
→ 2. Check if it's in stock
→ 3. Check if money is enough
→ 4. If all good — dispense, calculate change, reduce stock
→ 5. If anything fails — return money with the right error message

EDGES item not in menu, item out of stock (Soda), insufficient money, exact change, 0 or ₹ negative inserted

---------------------------

INPUT :-

• select the item from the checkbox like(chips, soda, chocolote, water)
• after selecting the checkbox, the number inut field will enable to enter item quentity in number which whould be greater then zero
• get the money input from the number input field to calculate - total, insuficient money, and changes

PROCESS :-

• first check the item checkbox, its enable number input field to enter quentity.
• get all the checked checkbox using querySelectorAll and store it in variable name selectedCheckboxes.
• loop the selectedCheckboxes to get item name and item quentity.
• validate the selectedCheckboxes for being empty and show eroor - ("please select at least 1 item").
• get selected item name and quentity and store it in selectedItems object, item name as key and item quentity as value.`
• validate the item quentity for being empty nevatige zero and non decimal integer
• now we got the selectedItems object which has item name and quentity now validate the quentity

OUTPUT :-


EDGE :- 


---------------------------

PSEUDOCODE :-



