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

-------------------------

INPUT :-

• 

PROCESS :-

• 

OUTPUT :-

• 

EDGE :-
• 

-------------------------

PSEUDOCODE :-



