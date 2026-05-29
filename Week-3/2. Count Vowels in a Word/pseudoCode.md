2. Count Vowels in a Word :-

Take a word from the user. Count how many vowels (a, e, i, o, u) it contains. Show the count.

EDGES
• Empty string (count is 0)
• Uppercase vowels ("A" should count)
• Word with no vowels (e.g., "rhythm")

-------------------------

INPUT :-

• Get the word from the user as string 

PROCESS :-

• validate the input field for being empty 
• convert the string into lowercase
• loop the word the search for vowels

OUTPUT :-

• count of vowels

EDGE :-

• Empty string (count is 0)
• Uppercase vowels ("A" should count)
• Word with no vowels (e.g., "rhythm")

-------------------------

PSEUDOCODE :- LOOP patter is (search)

Get the string from the user and convert it in lowercase
validate it for being empty
create a arrow of vowels in lowercasse - const vowels = ["a", "e", "i", "o", "u"];

loop the word to the length of the given world
get each of the charactor by using index and bracket notation
now find the word in the vowels array to using js array method (.includes()) which return true or false 
if it return true increment the count and store that character into the another array.
then print the result
