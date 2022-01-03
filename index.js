// let fullContainer = document.querySelector('.full-cart-container')
let laptopTextContainer = document.querySelector('.laptop-flex');


// let fullCart = `
// <div class="full-cart">
//   <h3>Cart</h3>
//   <span class="full-cart-line"></span>
//   <div class="flex">

//     <img class="checkout-image" src="./images/image-product-1-thumbnail.jpg" alt="snickers">

//     <div class="mobile-view">
//       <h4>Autumn Limited Edition...</h4>
//       <span class="light-text">$125.00 x 3</span>
//       <span class="dark-text">$375.00</span>
//     </div>
//     <div class="mobile-view">
//       <i class="fas fa-trash-alt trash"></i>
//     </div>
//   </div>
//   <button class="mobile-view">Checkout</button>
// </div>
// `;

let laptopText = `
<div class="laptop-flex-cover">
<div class="laptop-flex-img-cover">
  <img src="./images/image-product-1.jpg" alt="" class="laptop-flex-img">
</div>
<div class="thumbnails">
  <img src="./images/image-product-1-thumbnail.jpg" alt="">

  <img src="./images/image-product-2-thumbnail.jpg" alt="">

  <img src="./images/image-product-3-thumbnail.jpg" alt="">

  <img src="./images/image-product-4-thumbnail.jpg" alt="">

</div>
</div>

<div class="laptop-div">
  <h3>sneaker company</h3>
  <h2>fall limited edition Sneakers</h2>
  <p>These low profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
  <div class="prices">
    <span class="amount">$125.00</span>
    <span class="discount">50%</span>
    <h4 class="old-price">$250.00</h4>
  </div>
  <div class="button-flex">
    <div class="laptop-arithmetic">
      <span>-</span>
      <span>0</span>
      <span>+</span>
    </div>

    <button class="add-button">
    <i class="fas fa-shopping-cart"></i>
    <p>Add to cart</p>
    </button>
  </div>

</div></section>`

laptopTextContainer.innerHTML += laptopText
// cartContainer.innerHTML += emptyCart;
// fullContainer.innerHTML += fullCart;