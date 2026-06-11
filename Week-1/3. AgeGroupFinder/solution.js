function findAgeGroup() {

    let ageInput = document.getElementById("age").value;
    let age = Number(ageInput);
    let result = document.getElementById("result");

    if (ageInput === "") {
        result.innerHTML = "please fill the field";
    } else if (isNaN(age)) {
        result.innerHTML = "please enter a valid age";
    } else if (age == 0) {
        result.innerHTML = "first get born 😂😂";
    } else if (age == 12) {
        result.innerHTML = "you just entered your teenage";
    } else if (age == 18) {
        result.innerHTML = "you just became an adult";
    } else if (age == 60) {
        result.innerHTML = "you just became a senior citizen";
    } else if (age > 0 && age < 12) {
        result.innerHTML = "you are just a CHILD 👶🍼";
    } else if (age > 12 && age < 18) {
        result.innerHTML = "you are in your teen";
    } else if (age > 18 && age < 60) {
        result.innerHTML = "Now you are an adult";
    } else if (age >= 100) {
        result.innerHTML = "death is near 💀";
    } else if (age > 60) {
        result.innerHTML = "hello uncle/aunty you are a Senior citizen";
    }
}
