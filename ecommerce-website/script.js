let cart = [];
const cartCountElement = document.getElementById('cart');

// Function to update cart count
function updateCartCount() {
    cartCountElement.textContent = `Cart (${cart.length})`;
}

// Event listener for adding products to the cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.price').textContent;
        const productSize = productCard.querySelector('.size-select').value;

        if (productSize) {
            cart.push({ name: productName, price: productPrice, size: productSize });
            updateCartCount();
            alert(`${productName} has been added to your cart.`);
        } else {
            alert('Please select a size.');
        }
    });
});

// Function to handle login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Basic validation (this can be expanded with actual authentication logic)
    if (email && password) {
        alert('Login successful!'); // Placeholder for actual login logic
        // Redirect to a dashboard or home page
    } else {
        alert('Please fill in all fields.');
    }
});

// Function to handle registration
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    // Basic validation (this can be expanded with actual registration logic)
    if (name && email && password) {
        alert('Registration successful!'); // Placeholder for actual registration logic
        // Redirect to a login page or dashboard
    } else {
        alert('Please fill in all fields.');
    }
});
