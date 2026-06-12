2. Product Card :-

Create an object product for a phone:
• name: "Redmi Note 13"
• price: 15999
• inStock: true
• rating: 4.3

Write a function showProductCard(product) that prints the name, price, rating and stock status cleanly.

EDGES: inStock is false (print ”Out of Stock”), rating above 5

---

INPUT :-

• name, price , is stock status, rating out of 5

PROCESS :-

• create a function to get input vlaue validation and show product card

OUTPUT :-

• product

EDGE :-

• inStock is false (print ”Out of Stock”), rating above 5

---

PSEUDOCODE :-

<!-- create a function to get input validate and show product card -->

showProductCard = () => {

    <!-- create error array -->
    errors = []

    <!-- select all inputs -->
    productName
    productPrice
    productRating

    <!-- select checkbox -->
    inStock

    <!-- select image -->
    productImage

    <!-- validate product name -->
    IF (productName is empty){
        errors.push("Product name is required")
    }

    <!-- validate product price -->
    IF (productPrice is empty){
        errors.push("Product price is required")
    }

    ELSE IF (productPrice <= 0){
        errors.push("Product price must be greater than 0")
    }

    <!-- validate product rating -->
    IF (productRating is empty){
        errors.push("Product rating is required")
    }

    ELSE IF (rating less than 1 OR greater than 5){
        errors.push("Rating must be between 1 and 5")
    }

    <!-- validate image -->
    IF (image not selected){
        errors.push("Please select a product image")
    }

    <!-- print all errors -->
    IF (errors.length > 0){
        print errors
        return
    }

    <!-- display product card -->

    <!-- clear form -->

    <!-- clear preview -->

}
