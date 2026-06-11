5) The Temperature Converter :-
→ Ask for a temperature in Celsius. Convert to Fahrenheit using : F = (C × 9/5) + 32
→ Output: "X°C = Y°F"
Bonus: tell them if it's "Cold" (below 15°C), "Pleasant" (15–30°C), or "Hot" (above 30°C).
EDGES 0°C, negative temps, very high temps

PLAIN-ENGLISH DECOMPOSITION  ↓↓↓↓↓↓

INPUTS:
• Get the temperature in celcius

PROCESS:
• convert the celcius in Fahrenheit by using  F = (C × 9/5) + 32

OUTPUT:
• print temperature in Fahrenheit 
• If temperature is below 15 print its Cold
• if temperature between 15 to 30 its Hot
• if above 30 its hot

EDGES:
• handle 0°C, negative temps, very high temps

PSEUDOCODE ↓↓↓↓↓↓

Get temperature in Celsius
Convert input into number

Convert Celsius to Fahrenheit:
fahrenheit = (temp × 9/5) + 32

IF tempInput == ""
    print - "please fill the field"
ELSE IF isNaN(temp)
    print - "please enter a valid temperature"
ELSE
    ELSE IF temp == 0
        print - "0°C is the freezing point of water"
    ELSE IF temp < 0
        print - "Extreme cold"
    ELSE IF temp < 15
        print - "Cold weather"
    ELSE IF temp >= 15 && temp <= 30
        print - "Pleasant weather"
    ELSE IF temp > 30 && temp < 50
        print - "Hot weather"
    ELSE IF temp >= 50
        print - "Extreme heat"
    Print:
    X°C = Y°F"