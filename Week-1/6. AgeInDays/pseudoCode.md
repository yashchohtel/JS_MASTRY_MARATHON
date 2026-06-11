6) The Age in Days Calculator :-

Ask for the user's age in years. Output:

→ Age in months
→ Age in weeks
→ Age in days
→ Age in hours

PLAIN-ENGLISH DECOMPOSITION  ↓↓↓↓↓↓

INPUTS:
• Get the age in Yeasa

PROCESS:
• Apply validation on age input like valid number or empty input
• get months of age by (age*12)
• get Weeks of age by (age*52)
• get days of age by (age*365)
• get hours of age by (age*365*24)

OUTPUT:
• print age in monts 
• print age in weeks
• print age in days
• print age in hours

EDGES:
• if age is 0 print - age must be greater then zero

PSEUDOCODE ↓↓↓↓↓↓

get the age

IF age == ""
    print - "please fill the field"
ELSE IF isNaN(agep)
    print - "please enter a valid temperature"
ELSE IF (age <= 0)
    print - "age must be greater then zero"
ELSE 
    print age in monts 
    print age in weeks
    print age in days
    print age in days
