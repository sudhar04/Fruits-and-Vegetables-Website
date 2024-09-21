// Fruits and Vegetable site.js
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const productList = document.querySelectorAll('.product');
    const cartItems = document.getElementById('cartItems');

    searchBar.addEventListener('keyup', () => {
        const searchValue = searchBar.value.toLowerCase();
        productList.forEach(product => {
            const productName = product.getAttribute('data-name').toLowerCase();
            if (productName.includes(searchValue)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    });

    productList.forEach(product => {
        product.querySelector('.add-to-cart').addEventListener('click', () => {
            const itemName = product.getAttribute('data-name');
            const cartItem = document.createElement('li');
            cartItem.textContent = itemName;
            cartItems.appendChild(cartItem);
        });
    });
});


// contact an dabout us

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
    this.reset();
});


//new


function addToCart(product) {
    const cartItems = document.getElementById('cartItems');

    const newItem = document.createElement('li');
    newItem.textContent = product;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        cartItems.removeChild(newItem);
    };

    newItem.appendChild(removeButton);
    cartItems.appendChild(newItem);
}

function submitCart() {
    const cartItems = document.getElementById('cartItems').children;
    if (cartItems.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    let items = [];
    for (let i = 0; i < cartItems.length; i++) {
        items.push(cartItems[i].textContent.replace('Remove', '').trim());
    }
    
    alert('You have submitted the following items: ' + items.join(', '));
}

function resetCart() {
    document.getElementById('cartItems').innerHTML = '';
}
