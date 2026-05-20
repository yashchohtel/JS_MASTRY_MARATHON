7. The Day Activity Recommender :-

Take the day of the week. Recommend an activity:
→ Monday → "Plan the week"
→ Tuesday / Wednesday → "Deep work day"
→ Thursday → "Review progress"
→ Friday → "Wrap up"
→ Saturday / Sunday → "Rest or hobby"

Solve using a lookup object — even though some days share output. Figure out how.

EDGES invalid day name, capitalization mismatch, empty inp

---------------------------

INPUT :-

• Select a days of the week from select options

PROCESS :-

• Get a data from the select dropdown
• Validate for being empty
• Create a lookup object
• get the suggestion using selectedDay as key

OUTPUT :-
• Activity recommendation according to day

EDGE :- 
invalid day name, capitalization mismatch, empty inp (handlled by select option element)

---------------------------

PSEUDOCODE :-

get the select week from the select dropdown and store it in variable name (selectedDay)

create a lookup object name daySuggestion
const daySuggestion = {
    monday: "Plan the week",
    tuesday: "Deep work day",
    wednesday: "Deep work day",
    thursday: "Review progress",
    friday: "Wrap up",
    saturday: "Rest or hobby",
    sunday: "Rest or hobby"
};

validation 
IF (selectedDay === "")
    print - "please select a day"
ELSE 
    suggestion = daySuggestion[selectedDay]
    print - suggestion
