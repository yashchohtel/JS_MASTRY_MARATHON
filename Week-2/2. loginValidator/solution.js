login = () => {

    // get user and pass from input fields
    let username = document.getElementById("username").value.toLowerCase();
    let password = document.getElementById("password").value;
    let result = document.getElementById("result");
    let validUsername = "rajdeep";
    let validPassword = "easy123";

    // validate input value for being empty
    if (username === "" || password === "") {
        result.innerHTML = "Please enter both username and password.";
    }

    // validate username
    else if (username !== validUsername) {
        result.innerHTML = "User not found";
    }

    // validate password
    else if (password !== validPassword) {
        result.innerHTML = "Incorrect password";
    }

    // if all validations pass
    else {
        result.innerHTML = "Login successful!";
    }

}