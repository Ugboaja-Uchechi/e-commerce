let thumbnails = document.querySelector('.thumbnails');
let carouselContainer = document.querySelector('.carousel-container')
let next = document.querySelector('.next-container');
let prev = document.querySelector('.previous-container');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;

thumbnails.addEventListener('click', () => {
  let imageCarousel = `
  <div class="laptop-flex-cover">
  <div class="laptop-flex-img-cover">
    <img src="./images/image-product-1.jpg" alt="Sneakers" class="laptop-flex-img">
    <img src="./images/image-product-2.jpg" alt="Sneakers" class="laptop-flex-img">
    <img src="./images/image-product-3.jpg" alt="Sneakers" class="laptop-flex-img">
    <img src="./images/image-product-4.jpg" alt="Sneakers" class="laptop-flex-img">
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