// let thumbnails = document.querySelector('.thumbnails');
// let carouselContainer = document.querySelector('.carousel-container');
let next = document.querySelector('.next');
let prev = document.querySelector('.previous-container');
// let leftIcon = document.querySelector('.left-icon');
// let rightIcon = document.querySelector('.right-icon');
// const laptopImagesCarousel = document.querySelector('.laptop-carousel').children;
// console.log(laptopImagesCarousel)
const images = document.querySelector('.carousel').children;
const totalImages = images.length;
// const laptopTotalImages = laptopImagesCarousel.length;

let index = 0;
// let newIndex = 0;

prev.addEventListener('click', () => {
  nextImage('next');
})
console.log(prev);
next.addEventListener('click', () => {
  nextImage('prev');
})
console.log(next);

// leftIcon.addEventListener('click', () => {
//   nextLaptopImage('leftIcon');
// })

// rightIcon.addEventListener('click', () => {
//   nextLaptopImage('rightIcon');
// })

// function nextLaptopImage(newdirection) {
//   if(newdirection == 'rightIcon') {
//     newIndex++;
//     if(newIndex == laptopTotalImages) {
//       newIndex = 0;
//     }
//   } else {
//     if(newIndex == 0) {
//       newIndex = laptopTotalImages - 1;
//     } else {
//       newIndex--;
//     }
//   }

//   for(let i = 0; i < laptopImagesCarousel.length; i++) {
//     images[i].classList.remove('laptop-img');
//   }
//   images[newIndex].classList.add('laptop-img');
// }

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

// thumbnails.addEventListener('click', () => {
//   let imageCarousel = `
  // <div class="laptop-flex-cover">
  //   <div class="laptop-carousel">
  //     <div class="laptop-flex-img-cover">
  //       <img src="./images/image-product-1.jpg" alt="Sneakers" class="laptop-flex-img laptop-img-none laptop-img">
  //     </div>
  //     <div class="laptop-flex-img-cover">
  //       <img src="./images/image-product-2.jpg" alt="Sneakers" class="laptop-flex-img laptop-img-none">
  //     </div>
  //     <div class="laptop-flex-img-cover">
  //       <img src="./images/image-product-3.jpg" alt="Sneakers" class="laptop-flex-img laptop-img-none">
  //     </div>
  //     <div class="laptop-flex-img-cover">
  //       <img src="./images/image-product-4.jpg" alt="Sneakers" class="laptop-flex-img laptop-img-none">
  //     </div>
  //   </div>
  //   <div class = "icons left-icon">
  //     <i class="fa-solid fa-chevron-left"></i>
  //   </div>
  //   <div class = "icons right-icon">
  //     <i class="fa-solid fa-chevron-right"></i>
  //   </div>
  //   <div class="thumbnails thumbnails-popup">
  //     <img src="./images/image-product-1-thumbnail.jpg" alt="">
    
  //     <img src="./images/image-product-2-thumbnail.jpg" alt="">
    
  //     <img src="./images/image-product-3-thumbnail.jpg" alt="">
    
  //     <img src="./images/image-product-4-thumbnail.jpg" alt="">
    
  //   </div>
  // </div>
  {/* `
  carouselContainer.innerHTML = imageCarousel;
}); */}

let leftIcon = document.querySelector('.left-icon');
let rightIcon = document.querySelector('.right-icon');
const laptopImagesCarousel = document.querySelector('.laptop-carousel').children;
const laptopTotalImages = laptopImagesCarousel.length;

let newIndex = 0;

leftIcon.addEventListener('click', () => {
  nextLaptopImage('rightIcon');
})
console.log(leftIcon);
rightIcon.addEventListener('click', () => {
  nextLaptopImage('leftIcon');
})
console.log(rightIcon);

function nextLaptopImage(newdirection) {
  if(newdirection == 'rightIcon') {
    newIndex++;
    if(newIndex == laptopTotalImages) {
      newIndex = 0;
    }
  } else {
    if(newIndex == 0) {
      newIndex = laptopTotalImages - 1;
    } else {
      newIndex--;
    }
  }

  for(let i = 0; i < laptopImagesCarousel.length; i++) {
    laptopImagesCarousel[i].classList.remove('laptop-img');
  }
  laptopImagesCarousel[newIndex].classList.add('laptop-img');
}
