let cartContainer = document.querySelector('.cart-container');
let fullContainer = document.querySelector('.full-cart-container')
let laptopTextContainer = document.querySelector('.laptop-flex');

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

    <div class="mobile-view">
      <h4>Autumn Limited Edition...</h4>
      <span class="light-text">$125.00 x 3</span>
      <span class="dark-text">$375.00</span>
    </div>
    <div class="mobile-view">
      <i class="fas fa-trash-alt trash"></i>
    </div>
  </div>
  <button class="mobile-view">Checkout</button>
</div>
`;

let laptopText = `
<img src="./images/image-product-1.jpg" alt="">
<div>
  <h3>sneaker company</h3>
  <h2>fall limited edition Sneakers</h2>
  <p>These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
  <div class="prices">
    <span class="amount">$125.00</span>
    <span class="discount">50%</span>
    <h4 class="old-price">$250.00</h4>
  </div>
  <div class="arithmetic">
    <span>-</span>
    <span>0</span>
    <span>+</span>
    </div>

    <button class="add-button"><i class="fas fa-shopping-cart"></i> Add to cart</button>

</div>`

laptopTextContainer.innerHTML += laptopText
cartContainer.innerHTML += emptyCart;
fullContainer.innerHTML += fullCart;