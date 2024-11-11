let cart = [];
let cartCount = 0;
let cartTotal = 0;

function addToCart(bookName, price) {
    // Add the selected book to the cart
    cart.push({ name: bookName, price: price });
    cartCount++;
    cartTotal += price;
    updateCart();
}

function updateCart() {
    // Update the cart count
    document.getElementById('cart-count').textContent = cartCount;

    // Update the cart items and total
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = ''; // Clear cart items list
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - Rp ${item.price}`;
        cartItemsList.appendChild(li);
    });

    document.getElementById('cart-total').textContent = cartTotal;
}

function checkout() {
    if (cart.length > 0) {
        // Simulate a checkout process (alert with the total amount)
        alert(`Total Pembelian: Rp ${cartTotal}. Terima kasih telah berbelanja!`);
        
        // Clear cart after checkout
        cart = [];
        cartCount = 0;
        cartTotal = 0;

        // Update the UI after checkout
        updateCart();
        closeCart();
    } else {
        alert('Keranjang kosong! Silakan tambahkan buku ke keranjang.');
    }
}

function openCart() {
    document.getElementById('cart-modal').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Open cart when the cart icon is clicked
document.getElementById('cart-link').addEventListener('click', openCart);