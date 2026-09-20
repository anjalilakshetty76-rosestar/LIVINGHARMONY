// Style information
const styles = {
    MODERN: {
        title: "Modern Living",
        description: "Clean lines, simple furniture and a contemporary look."
    },

    CLASSIC: {
        title: "Classic Living",
        description: "Elegant furniture, timeless details and a sophisticated atmosphere."
    },

    MINIMALIST: {
        title: "Minimalist Living",
        description: "Simple spaces, neutral tones and only what you truly need."
    },

    TRADITIONAL: {
        title: "Traditional Living",
        description: "Warm colors, classic patterns and comfortable timeless interiors."
    }
};

// Get all style buttons
const styleButtons = document.querySelectorAll(".style-buttons button");

// Create an area for style information
const styleInfo = document.createElement("div");
styleInfo.classList.add("style-info");

const styleButtonContainer = document.querySelector(".style-buttons");

if (styleButtonContainer) {
    styleButtonContainer.after(styleInfo);
}
// Add click functionality
if (styleButtonContainer) {
    styleButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedStyle = button.textContent;

            // Get information about selected style
            const style = styles[selectedStyle];

            // Display the information
            styleInfo.innerHTML = `
            <h3>${style.title}</h3>
            <p>${style.description}</p>
        `;

            // Remove active class from all buttons
            styleButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });

            // Highlight selected button
            button.classList.add("active");
        });

    });
}
const images = document.querySelectorAll(".category img");
const popup = document.getElementById("imagePopup");
const popupImage = document.getElementById("popupImage");
const closeButton = document.querySelector(".close");

images.forEach(function (image) {
    image.addEventListener("click", function () {
        popup.style.display = "flex";
        popupImage.src = image.src;
    });
});

closeButton.addEventListener("click", function () {
    popup.style.display = "none";
});

popup.addEventListener("click", function (event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

// ADD TO CART

const cartButtons = document.querySelectorAll(".product-card button");
const cartMessage = document.getElementById("cartMessage");

cartButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const productCard = button.parentElement;
        const productName = productCard.querySelector("h3").textContent;

        cartMessage.textContent = productName + " added to cart!";
        cartMessage.style.display = "block";

        setTimeout(function() {
            cartMessage.style.display = "none";
        }, 2000);

    });

});
// PRODUCT POPUP

const productImages = document.querySelectorAll(".product-card img");
const productPopup = document.getElementById("productPopup");
const popupProductImage = document.getElementById("popupProductImage");
const popupProductName = document.getElementById("popupProductName");
const popupProductPrice = document.getElementById("popupProductPrice");
const productClose = document.querySelector(".product-close");

productImages.forEach(function(image) {

    image.addEventListener("click", function() {

        const card = image.parentElement;

        popupProductImage.src = image.src;
        popupProductName.textContent = card.querySelector("h3").textContent;
        popupProductPrice.textContent = card.querySelector("p").textContent;

        productPopup.style.display = "flex";
    });

});

if (productClose) {
    productClose.addEventListener("click", function() {
        productPopup.style.display = "none";
    });
}

if (productPopup) {
    productPopup.addEventListener("click", function(event) {

        if (event.target === productPopup) {
            productPopup.style.display = "none";
        }

    });
}
