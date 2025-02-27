
const bagels = [
    {name: "Buttery Bagel", image: "/images/butterybagel.webp", price: 2.99, book: "Hitchhikers guide to the galaxy", usp: "Customer's choice!"},
    {name: "Brown Bagel", image: "/images/brownbagel.webp", price: 3.99, book: "Crime and Punishment", usp: "Go brown or go down!"},
    {name: "Big Bagel", image: "/images/bigbagel.webp", price: 6.99, book: "A song of Ice and Fire", usp: "Double the size, double the price!"}
];

const cart = [];
const listContainer = document.querySelector(".list-group");

bagels.forEach(bagel => {
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.textContent = bagel.name;

    let bagelImage = document.createElement("img");
    bagelImage.src = bagel.image;
    bagelImage.alt = bagel.name;

    let bagelButton = document.createElement("button");
    bagelButton.textContent = "Learn more";
    bagelButton.alt = "Learn more"

    let cartButton = document.createElement("button");
    let cartIcon = document.createElement("img");
    cartIcon.src = "/images/cart.webp"
    cartIcon.alt = "Add to Cart"
    
    // Styling
    bagelImage.classList.add("bagel-img");
    bagelButton.classList.add("btn", "btn-primary", "btn-sm", "custom-hover");
    cartButton.classList.add("btn", "btn-success", "btn-sm", "ml-2");
    cartIcon.classList.add("cart-img");

    cartButton.appendChild(cartIcon);
    cartButton.addEventListener("click", () => {
        addToCart({ name: bagel.name, price: bagel.price});
    })

    listItem.appendChild(bagelImage);
    listItem.appendChild(bagelButton);
    listItem.appendChild(cartButton)
    listContainer.appendChild(listItem);

    bagelButton.addEventListener("click", () => {
        AddMoreInformation({ name: bagel.name, price: bagel.price, book: bagel.book, usp: bagel.usp })
    })
});

function addToCart(bagel){
    cart.push(bagel);
    updateCartDisplay();
}

function updateCartDisplay(){
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = ""; // Clear previous items

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    let totalPrice = 0;

    cart.forEach((item, index) => {

        if (!item || !item.name || typeof item.price !== "number") {
            console.error("Invalid cart item detected:", item);
            return;
        }

        let cartItem = document.createElement("div");
        cartItem.classList.add("cart-item")

        let itemText = document.createElement("p");
        itemText.textContent = `${item.name} - $${item.price.toFixed(2)}`;

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("btn", "btn-danger", "btn-sm", "ml-2");

        removeButton.addEventListener("click", () => {
            removeFromCart(index);
        });

        cartItem.appendChild(itemText);
        cartItem.appendChild(removeButton);
        cartContainer.appendChild(cartItem);

        totalPrice += item.price;
    });

    let totalDisplay = document.createElement("h4");
    totalDisplay.textContent = `Total: $${totalPrice.toFixed(2)}`;
    cartContainer.appendChild(totalDisplay);
}

function removeFromCart(index){
    cart.splice(index, 1);
    updateCartDisplay();
}

function AddMoreInformation(bagel){

    let infoContainer = document.getElementById("info-container");
    let title = document.getElementById("info-title");
    let details = document.getElementById("info-details");

    title.textContent = `${bagel.name} - $${bagel.price.toFixed(2)}`;
    details.textContent = `\n"${bagel.usp}" \n Recommended Book: ${bagel.book}`;

    infoContainer.classList.add("visible");
}
