1. Reverse a String (Without .reverse()) :-

Take a word. Print it reversed. You're not allowed to use .reverse(). Use a loop.

Example: "rajdeep" → "peejdar"

EDGES
• Empty string
• Single character ("a" → "a")
• Word with spaces ("code easy" → "ysae edoc")

HINT
Start with an empty result string. Loop the original from LAST character to FIRST. Add each
character to the result. Pattern: Accumulator.

-------------------------

INPUT :-

• Get the word from the user as text.

PROCESS :-

• validate the number for being empty.
• reverse the word ans store it in another array and then join and display

OUTPUT :-

• given world in reverse Example: "rajdeep" → "peejdar"

EDGE :-
• Empty string
• Single character ("a" → "a")
• Word with spaces ("code easy" → "ysae edoc")

-------------------------

PSEUDOCODE :- LOOP pattern (Accumulator)

Get the text input from the user 

Validate the input for being empty
IF (word === "")
    print - "please fill the field"

ELSE 
    loop the word from the last and store it in another array then join and display



