// Script for the Menu Slider
let currentSlide = 0;

// Function to move the slide
function moveSlide(direction) {
  const menuSlider = document.querySelector('.menu-slider');
  const slides = document.querySelectorAll('.menu-card');
  
  // Update the current slide index based on direction
  currentSlide += direction;

  // Loop back to the first slide when reaching the last one
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  // Calculate the new transform value to move the slider
  const slideWidth = slides[0].offsetWidth + 20; // 20px is for the margin between cards
  menuSlider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Function to add items to the cart
function addToCart(itemName, price) {
  console.log(`Added to cart: ${itemName} for IDR ${price}`);
  // Here you can add additional logic to update the cart on your site
}

// Optional: Automatically move the slider every 5 seconds
setInterval(() => {
  moveSlide(1);
}, 5000);
