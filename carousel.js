let thumbnails = document.querySelector('.thumbnails');
let carouselContainer = document.querySelector('.carousel-container');

thumbnails.addEventListener('click', () => {
  let imageCarousel = `
  <div class="laptop-flex-cover">
  <div class="laptop-flex-img-cover">
    <img src="./images/image-product-1.jpg" alt="" class="laptop-flex-img z-index">
  </div>
  <div class="thumbnails">
    <img src="./images/image-product-1-thumbnail.jpg" alt="">
  
    <img src="./images/image-product-2-thumbnail.jpg" alt="">
  
    <img src="./images/image-product-3-thumbnail.jpg" alt="">
  
    <img src="./images/image-product-4-thumbnail.jpg" alt="">
  
  </div>
  </div>
  `
  carouselContainer.innerHTML = imageCarousel;
});