3) The Age Group Finder :-

Ask for the user's age. 
→ 0–12 → "Child"
→ 13–19 → "Teenager
→ 20–59 → "Adult
→ 60 and above → "Senior

PLAIN-ENGLISH DECOMPOSITION  ↓↓↓↓↓↓

INPUTS:
• Get the age

PROCESS:
• check in which group the age is. by comparing the given age with group age

OUTPUT:
• print the age and there group persepctivly

EDGES:
• age = 0, 
• age exactly 12 / 13 / 19 / 20

PSEUDOCODE ↓↓↓↓↓↓

get the age
Convert the input value into a number [num = Number(ageInput)]

IF age === ""
    print - "please fill the field"

ELSE IF isNaN(age)
    print - "please enter a valid age"

ELSE IF age == 0
    print - "first get born 😂😂"

ELSE IF age == 12
    print - "you just entered your teenage"

ELSE IF age == 18
    print - "you just became an adult"

ELSE IF age == 60
    print - "you just became a senior citizen"

ELSE IF age > 0 and age < 12
    print - "you are just a CHILD 👶🍼"

ELSE IF age > 12 and age < 18
    print - "you are in your teen"

ELSE IF age > 18 and age < 60
    print - "Now you are an adult"

ELSE IF age > 60
    print - "hello uncle/aunty you are a Senior citizen"
