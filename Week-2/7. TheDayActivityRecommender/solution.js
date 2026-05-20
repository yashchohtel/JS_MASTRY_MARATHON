suggestActivity = () => {

    let selectedDay = document.getElementById("weekDay").value;
    let result = document.getElementById("result");

    const daySuggestion = {
        monday: "Plan the week",
        tuesday: "Deep work day",
        wednesday: "Deep work day",
        thursday: "Review progress",
        friday: "Wrap up",
        saturday: "Rest or hobby",
        sunday: "Rest or hobby"
    };

    // validation
    if (selectedDay === "") {
        result.innerHTML = "Please select a day.";
    }

    // suggestion
    else {
        let suggestion = daySuggestion[selectedDay];
        result.innerHTML = suggestion;
    }

}