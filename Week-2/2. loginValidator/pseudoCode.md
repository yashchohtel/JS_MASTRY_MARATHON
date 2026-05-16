2. The Login Validator :-

Ask for username and password. The correct username is rajdeep and the correct password is
easy123. Print one of: "Login successful," "Wrong password," "User not found," or "Both fields
empty."

EDGES both empty (one combined message), correct user but wrong password, user doesn't exist

-------------------------

INPUT :-

• Get the username and passward input from the user

PROCESS :-

• validate both of the fields for being empty.
• check the user name if user name is (rajdeep) then check for password otherwise print user not exist
• check the password if (easy123) then print login sucessfull otherwise print incorrect password

OUTPUT :-

• user dosen't exist / incorrect password / login sucessfull

EDGE :-
• both empty (one combined message), correct user but wrong password, user doesn't exist

-------------------------

PSEUDOCODE :-

get the user name and store it in variable name (userName) and also convert it to lowercase.
get the user password and store it in variable name (password) and also convert it to lowercase.

validation check for empty input
IF (userName === "" || password === "" )
    print - "please fill all the field"
ELSE IF (userName !== "rajdeep")
    print - "user dosen't exist"
ELSE IF (password !== "easy123")
    print - "in correct password"
ELSE
    print - "login sucessfull"
