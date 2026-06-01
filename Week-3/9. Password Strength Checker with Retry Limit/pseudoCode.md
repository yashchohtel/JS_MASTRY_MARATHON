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


   




