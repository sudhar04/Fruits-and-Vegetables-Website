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
