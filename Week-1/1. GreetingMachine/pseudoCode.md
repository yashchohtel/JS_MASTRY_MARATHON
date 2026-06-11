1) Gretting machine :- 

PLAIN-ENGLISH DECOMPOSITION ↓↓↓↓↓↓

INPUTS:
• Get the user's name
• Get the user's age

PROCESS:
• Check if both fields are filled
• Check if age is greater than 0
• Calculate future age by adding 10 to current age
• Create greeting message

OUTPUT:
• Print greeting message with current age
• Print future age after 10 years

EDGES:
• If name is empty → print "Please fill all fields"
• If age is empty → print "Please fill all fields"
• If age is less than or equal to 0 → print "Age must be greater than 0"

PSEUDOCODE ↓↓↓↓↓↓
get the name
get the age

Convert the age input into a number
[age = Number(ageInput)]

IF name === "" OR ageInput === ""
    print - "please fill all fields"

ELSE IF age <= 0
    print - "age must be greater than 0"

ELSE
    futureAge = age + 10

    print - "Hi name, you are age years old."

    print - "You will be futureAge in 10 years."