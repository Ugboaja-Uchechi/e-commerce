let next = document.querySelector('.next');
let leftIcon = document.querySelector('.left-icon');
let rightIcon = document.querySelector('.right-icon');
let prev = document.querySelector('.previous-container');
const images = document.querySelector('.carousel').children;
const laptopCarousel = document.querySelector('.laptop-carousel').children;
const totalImages = images.length;
const laptopTotalImages = laptopCarousel.length;

let index = 0;
// let newIndex = 0;

// for (let i = 0; i < prev.length; i++) {
//   prev[i].addEventListener('click', () => {
//     nextImage('next');
//   })

// };

prev.addEventListener('click', () => {
  nextImage('next');
})

leftIcon.addEventListener('click', () => {
  nextLaptopImage('rightIcon');
})

rightIcon.addEventListener('click', () => {
  nextLaptopImage('leftIcon');
})
console.log(prev);
// for (let i = 0; i < next.length; i++) {
//   next[i].addEventListener('click', () => {
//     nextImage('prev');
//   })

// };
next.addEventListener('click', () => {
  nextImage('prev');
})
console.log(next);

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

function nextLaptopImage(direction) {
  if(direction == 'rightIcon') {
    index++;
    if(index == laptopTotalImages) {
      index = 0;
    }
  } else {
    if(index == 0) {
      index = laptopTotalImages - 1;
    } else {
      index--;
    }
  }

  for(let i = 0; i < laptopCarousel.length; i++) {
    laptopCarousel[i].classList.remove('block');
  }
  laptopCarousel[index].classList.add('block');
}
