let items = document.querySelectorAll('.item');
console.log(items[0])

items.forEach(item => {

    let checkbox = item.querySelector('input[type="checkbox"]');
    let quentityInput = item.querySelector('input[type="number"]');

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            quentityInput.disabled = false;
        } else {
            quentityInput.disabled = true;
            quentityInput.value = ''; // Clear the input value when disabled
        }
    });

});
