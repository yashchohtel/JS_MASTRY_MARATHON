7. Contact Book :-

let contactBook = {
    contacts: [],
    totalContacts: 0
};

Write:
- addContact(name, phone, city)
- findContact(name)
- showByCity(city)
- deleteContact(name)

Edges:
- Contact not found
- Delete non-existent contact
- City with no contacts

---

INPUT :-

• name, city, phone - to add contact
• name - to find contact
• city - to find contact by city
• name - to delete contact 

PROCESS :-

•

OUTPUT :-

- addContact(name, phone, city)
- findContact(name)
- showByCity(city)
- deleteContact(name)


EDGE :-

- Contact not found
- Delete non-existent contact
- City with no contacts

---

PSEUDOCODE :-

<!-- function to add contact -->
addContact = () => {

    get name, phone and city

    validate empty inputs

    validate phone number length

    validate duplicate name

    validate duplicate phone number

    create contact object

    add contact to contacts array

    increment totalContacts

    show success message

    clear inputs

}

<!-- function to find contact -->
findContact = () => {

    get name

    validate no contacts

    validate empty input

    find contact

    validate contact not found

    display contact

}

<!-- function to show contacts by city -->
showByCity = () => {

    get city

    validate no contacts

    validate empty input

    find city contacts

    validate city not found

    display contacts

}

<!-- function to delete contact -->
deleteContact = () => {

    get name

    validate no contacts

    validate empty input

    find contact index

    validate contact not found

    delete contact

    decrement totalContacts

    show success message

}

<!-- function to show all contacts -->
showContacts = () => {

    validate no contacts

    create output variable

    loop contacts array

    display contact details

}