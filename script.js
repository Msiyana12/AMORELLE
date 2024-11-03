// Function to display the cart contents
function displayCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    const ul = document.createElement('ul');
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    cartContainer.appendChild(ul);
}

// Function to add an item to the cart
function addToCart(productName) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to your cart!`);
}

// Function to clear the cart
function clearCart() {
    localStorage.removeItem('cart');
    displayCart();
    alert('Cart has been cleared.');
}

// Function to place the order (this is a placeholder, you can implement the actual order logic)
function placeOrder() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items before checking out.');
        return;
    }
    alert('Thank you for your order! Your items will be shipped shortly.');
    clearCart(); // Clear the cart after placing the order
}

// Call the displayCart function when the cart page loads
if (document.getElementById('cart')) {
    displayCart();
}

