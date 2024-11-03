let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart.`);
}

function displayCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    let cartContent = "<h2>Your Cart</h2>";
    cartItems.forEach((item, index) => {
        cartContent += `<p>${item.productName} - $${item.price}</p>`;
    });
    document.getElementById("cart").innerHTML = cartContent;
}
