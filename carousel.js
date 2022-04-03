let thumbnails = document.querySelector('.thumbnails');
let carouselContainer = document.querySelector('.carousel-container')
let next = document.querySelector('.next-container');
let prev = document.querySelector('.previous-container');
const images = document.querySelector('.carousel').children;
const totalImages = images.length;

let index = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})

next.addEventListener('click', () => {
  nextImage('prev');
})

function nextImage(direction) {
  if(direction == 'next') {
    index++;
    if(index == totalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < images.length; i++) {
    images[i].classList.remove('main');
  }
  images[index].classList.add('main');
}

thumbnails.addEventListener('click', () => {
  let imageCarousel = `
  <div class="laptop-flex-cover">
  <div class="laptop-flex-img-cover">
    <img src="./images/image-product-1.jpg" alt="Sneakers" class="laptop-flex-img laptop-img-none laptop-img">
    <img src="./images/image-product-2.jpg" alt="Sneakers" class="laptop-flex-img laptop-img-none">
    <img src="./images/image-product-3.jpg" alt="Sneakers" class="laptop-flex-img laptop-img-none">
    <img src="./images/image-product-4.jpg" alt="Sneakers" class="laptop-flex-img laptop-img-none">
  </div>
  <div class = "icons">
    <i class="fa-solid fa-chevron-left"></i>
  </div>
  <div class = "icons">
    <i class="fa-solid fa-chevron-right"></i>
  </div>
  <div class="thumbnails thumbnails-popup">
    <img src="./images/image-product-1-thumbnail.jpg" alt="">
  
    <img src="./images/image-product-2-thumbnail.jpg" alt="">
  
    <img src="./images/image-product-3-thumbnail.jpg" alt="">
  
    <img src="./images/image-product-4-thumbnail.jpg" alt="">
  
  </div>
  </div>
  `
  carouselContainer.innerHTML = imageCarousel;
});