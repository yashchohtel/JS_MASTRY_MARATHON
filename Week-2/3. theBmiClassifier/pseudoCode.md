2. The BMI Classifier :-

Take weight (kg) and height (m). Calculate BMI = weight ÷ (height × height). Classify as:
→ Below 18.5 → "Underweight"
→ 18.5 – 24.9 → "Normal"
→ 25 – 29.9 → "Overweight"
→ 30 and above → "Obese"

EDGES height = 0 (would crash division), negative inputs, decimal inputs

-------------------------

INPUT :-

• Get the Weight in KG and Height in CM (and convert height in meter)

PROCESS :-

• validate both of the fields for being empty.
• Validate both of the fields for being zero and negative.
• Calculate the BMI BY THIS FORMULA - BMI = weight ÷ (height × height)

OUTPUT :-

• Below 18.5 → "Underweight"
• 18.5 – 24.9 → "Normal"
• 25 – 29.9 → "Overweight"
• 30 and above → "Obese"

EDGE :-
• height = 0 (would crash division), negative inputs, decimal inputs

-------------------------

PSEUDOCODE :-

get the weight in kg and store it in variable name (weight)
get the height in cm, convert it in meter using (value/100) and store it in variable name (height) 

validate bothe the field for empty
IF (weight == "" || height == "")
    print - "please fill all the fields"
ElSE IF (weight <= 0 || height <= 0)
    print - "height and weight should bhe greater then zero"
ELSE
    calculate BMI = weight / (heightInMeter * heightInMeter)
    IF (bmi < 18.5)
        print - "Underweight"
    ELSE IF (bmi >= 18.5 && bmi <= 24.9)
        print - "Normal"
    ELSE IF (bmi >= 25 && <= 29.9 )
        print - "Overweight"
    ELSE IF (bmi >= 30)
        print - "Obese"