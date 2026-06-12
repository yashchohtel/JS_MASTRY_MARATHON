// function to preview product image on product selection
const productImage = document.getElementById("productImage");
const preview = document.getElementById("preview");

productImage.addEventListener("change", () => {

    const selectedImage = productImage.files[0];

    if (!selectedImage) {
        return;
    }

    preview.src = URL.createObjectURL(selectedImage);
    preview.style.display = "block";

});

// function to show product card 
showProductCard = () => {

    // to store error
    const errors = [];

    // select result element
    const result = document.getElementById("result");

    // select inputs
    const productName = document.getElementById("productName").value.trim();
    const productPrice = Number(document.getElementById("productPrice").value);
    const productRating = Number(document.getElementById("productRating").value);

    // checkbox
    const inStock = document.getElementById("inStock").checked;

    // image
    const productImage = document.getElementById("productImage").files[0];

    // validation
    if (!productName) {
        errors.push("Product name is required");
    }

    if (!productPrice) {
        errors.push("Product price is required");
    } else if (productPrice <= 0) {
        errors.push("Product price must be greater than 0");
    }

    if (!productRating) {
        errors.push("Product rating is required");
    } else if (productRating < 1 || productRating > 5) {
        errors.push("Rating must be between 1 and 5");
    }

    if (!productImage) {
        errors.push("Please select a product image");
    }

    // print errors
    if (errors.length > 0) {
        result.innerHTML = errors.map(error => `<p>• ${error}</p>`).join("");
        return;
    }


    // create object
    let productCard = {
        name: productName,
        price: productPrice,
        rating: productRating,
        image: URL.createObjectURL(productImage),
        inStock: inStock ? "in stock" : "out of stock"
    }

    // display product cart
    result.innerHTML = `
    
    <div class="productCard">

        <img src="${productCard.image}" alt="Product Image">

        <div class="productDetail">

            <h2 class="productName">${productCard.name}</h2>

            <p class="productPrice">₹${productCard.price}</p>

            <p class="productRating">⭐ ${productCard.rating} / 5</p>

            <p class="productStock">${productCard.inStock}</p>

        </div>

    </div>`;

    // reset form
    document.getElementById("productForm").reset();

    // hide preivew
    document.getElementById("preview").style.display = "none";

}