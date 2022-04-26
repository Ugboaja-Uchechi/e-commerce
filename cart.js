let cart = document.querySelector('.popup-cart');
let cartContainer = document.querySelector('.cart-container');
// let number = document.querySelector('.number');
// let button = document.querySelector('.add-button')
// // let fullCartContainer = document.querySelector('.full-cart-container');

// button.addEventListener('click', (e) => {
//   let add = Number(number.getAttribute('data-count') || 0);
// })

cart.addEventListener('click', () => {
  
  let emptyCartContent = `
  <div class="empty-cart">
  <h3>Cart</h3>
  <span></span>
  <p>Your cart is empty</p>
  </div>
  `
  cartContainer.innerHTML = emptyCartContent;
  
  if (cart.click) {
    cartContainer.classList.toggle("cart-container");
  }
});

// button.addEventListener('click', () => {
//   if (button.click) {
//     numCount.innerHTML = number
//   }
// })
