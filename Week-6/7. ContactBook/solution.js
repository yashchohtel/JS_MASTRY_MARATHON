// set object structure
let contactBook = {
    contacts: [],
    totalContacts: 0
};

// function to add contact
function addContact() {

    // get input values
    let contactName = document.getElementById("contactName").value.trim();
    let contactPhone = document.getElementById("contactPhone").value.trim();
    let contactCity = document.getElementById("contactCity").value.trim();
    let result = document.getElementById("result");

    // validate empty inputs
    if (contactName === "" || contactPhone === "" || contactCity === "") {
        result.innerHTML = "Please fill all fields.";
        return;
    }

    // validate phone number length
    if (contactPhone.length !== 10) {
        result.innerHTML = "Phone number must be exactly 10 digits.";
        return;
    }

    // validate duplicate contact
    for (let contact of contactBook.contacts) {

        if (contact.name.toLowerCase() === contactName.toLowerCase()) {
            result.innerHTML = "Contact name already exists.";
            return;
        }

        if (contact.phone === contactPhone) {
            result.innerHTML = "Phone number already exists.";
            return;
        }

    }

    // create contact object
    let contact = {
        name: contactName,
        phone: contactPhone,
        city: contactCity
    };

    // add contact
    contactBook.contacts.push(contact);

    // increment total contacts
    contactBook.totalContacts++;

    // show feedback
    result.innerHTML = "Contact added successfully.";

    // clear inputs
    document.getElementById("contactName").value = "";
    document.getElementById("contactPhone").value = "";
    document.getElementById("contactCity").value = "";

}

// function to find contact
function findContact() {

    // get input
    let name = document.getElementById("findName").value.trim();
    let result = document.getElementById("result");

    // validate no contacts
    if (contactBook.contacts.length === 0) {
        result.innerHTML = "No contacts found.";
        return;
    }

    // validate empty input
    if (name === "") {
        result.innerHTML = "Please enter a name.";
        return;
    }

    // find contact
    let contact = contactBook.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    // validate contact not found
    if (!contact) {
        result.innerHTML = "Contact not found.";
        return;
    }

    // display contact
    result.innerHTML = `
        <p><strong>Name:</strong> ${contact.name}</p>
        <p><strong>Phone:</strong> ${contact.phone}</p>
        <p><strong>City:</strong> ${contact.city}</p>
    `;

    document.getElementById("findName").value = "";

}

// function to show contacts by city
function showByCity() {

    // get input
    let city = document.getElementById("searchCity").value.trim();
    let result = document.getElementById("result");

    // validate no contacts
    if (contactBook.contacts.length === 0) {
        result.innerHTML = "No contacts found.";
        return;
    }

    // validate empty input
    if (city === "") {
        result.innerHTML = "Please enter a city.";
        return;
    }

    // find contacts
    let cityContacts = contactBook.contacts.filter(
        contact => contact.city.toLowerCase() === city.toLowerCase()
    );

    // validate city not found
    if (cityContacts.length === 0) {
        result.innerHTML = "No contacts found for this city.";
        return;
    }

    // store output
    let output = "";

    // display contacts
    for (let contact of cityContacts) {

        output += `
            <p>
                <strong>Name:</strong> ${contact.name}<br>
                <strong>Phone:</strong> ${contact.phone}
            </p>
            <hr>
        `;

    }

    result.innerHTML = output;

    document.getElementById("searchCity").value = "";

}

// function to delete contact
function deleteContact() {

    // get input
    let name = document.getElementById("deleteName").value.trim();
    let result = document.getElementById("result");

    // validate no contacts
    if (contactBook.contacts.length === 0) {
        result.innerHTML = "No contacts found.";
        return;
    }

    // validate empty input
    if (name === "") {
        result.innerHTML = "Please enter a name.";
        return;
    }

    // find contact index
    let index = contactBook.contacts.findIndex(
        contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    // validate contact not found
    if (index === -1) {
        result.innerHTML = "Contact not found.";
        return;
    }

    // delete contact
    contactBook.contacts.splice(index, 1);

    // decrement total contacts
    contactBook.totalContacts--;

    // show feedback
    result.innerHTML = "Contact deleted successfully.";

    document.getElementById("deleteName").value = "";

}

// function to show all contacts
function showContacts() {

    let result = document.getElementById("result");

    // validate no contacts
    if (contactBook.contacts.length === 0) {
        result.innerHTML = "No contacts found.";
        return;
    }

    // store output
    let output = "";

    // display all contacts
    for (let contact of contactBook.contacts) {

        output += `
            <p>
                <strong>Name:</strong> ${contact.name}<br>
                <strong>Phone:</strong> ${contact.phone}<br>
                <strong>City:</strong> ${contact.city}
            </p>
            <hr>
        `;

    }

    // display contacts
    result.innerHTML = output;

}