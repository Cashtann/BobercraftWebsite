// Select all buttons with the class 'shop-product-button'
const shopProductButtons = document.querySelectorAll('.shop-product-button');

// Loop through each button and add a click event listener
shopProductButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Redirect to the desired URL
        window.location.href = 'https://tipply.pl/@bobercraft';
    });
});