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
  
  if (cartContainer.style.display === "none") {
    cartContainer.style.display = "block";
  } else {
    cartContainer.style.display = "none";
  }
});

  // const fullCartArray = [
  //   {
  //     id: 1,
  //     name: 'cart',
  //     image: './images/image-product-1-thumbnail.jpg',
  //     product: 'Autumn Linited Edition',
  //     amount: '$125.00 x 3',
  //     price: '$375.00',
  //     button: 'Checkout'
  //   }
  // ]
  
  // let fullCart = `
  // <div class="full-cart">
  //   <h3>${fullCartArray.name}</h3>
  //   <span class="full-cart-line"></span>
  //   <div class="flex">
  
  //     <img class="checkout-image" src="${fullCartArray.image}" alt="snickers">
  
  //     <div class="mobile-view">
  //       <h4>${fullCartArray.product}</h4>
  //       <span class="light-text">${fullCartArray.amount}</span>
  //       <span class="dark-text">${fullCartArray.price}</span>
  //     </div>
  //     <div class="mobile-view">
  //       <i class="fas fa-trash-alt trash"></i>
  //     </div>
  //   </div>
  //   <button class="mobile-view">${fullCartArray.button}</button>
  // </div>
  // `
  // fullCartContainer.innerHTML = fullCart;

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