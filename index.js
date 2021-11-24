let cartContainer = document.querySelector('.cart-container');
let fullContainer = document.querySelector('.full-cart-container')

let emptyCart = `
<div class="empty-cart">
<h3>Cart</h3>
<span></span>
<p>Your cart is empty</p>
</div>`;

let fullCart = `
<div class="full-cart">
  <h3>Cart</h3>
  <span class="full-cart-line"></span>
  <div class="flex">

    <img class="checkout-image" src="./images/image-product-1-thumbnail.jpg" alt="snickers">

    <div>
      <h4>Autumn Limited Edition...</h4>
      <span class="light-text">$125.00 x 3</span>
      <span class="dark-text">$375.00</span>
    </div>
    <div>
      <i class="fas fa-trash-alt trash"></i>
    </div>
  </div>
  <button>Checkout</button>
</div>
`;

cartContainer.innerHTML += emptyCart;
fullContainer.innerHTML += fullCart;