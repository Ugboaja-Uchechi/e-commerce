let cartContainer = document.querySelector('.cart-container');

let emptyCart = `
<div class="empty-cart">
<h3>Cart</h3>
<span></span>
<p>Your cart is empty</p>
</div>`;

cartContainer.innerHTML += emptyCart;