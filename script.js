
// JavaScript untuk pergerakan penggeser otomatis (about slider)
  let currentIndex = 0; // Lacak indeks slide saat ini untuk about slider
  const aboutSlides = document.querySelectorAll('.about-card'); // Pilih semua individu tentang slide
  const totalAboutSlides = aboutSlides.length; // Dapatkan jumlah totalof about slides
  const aboutSlider = document.querySelector('.about-slider'); // The about slider container
  
  // Berfungsi untuk mengubah about slide
  function moveAboutSlide() {
    currentIndex++; // Tingkatkan indeks
    if (currentIndex >= totalAboutSlides) {
      currentIndex = 0; //Ulangi kembali ke slide pertama jika kita mencapai akhir
    }

    // Apply the new transform to move the slides
    aboutSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Set an interval of 7 seconds (7000ms) for the about slider to change
  setInterval(moveAboutSlide, 7000); // Increased the interval to 7 seconds for a smoother transition


  // Script for the Menu Slider
  let currentSlide = 0; // Track the current slide index for the menu slider

  // Function to move the menu slide
  function moveMenuSlide(direction) {
    const menuSlider = document.querySelector('.menu-slider');
    const menuSlides = document.querySelectorAll('.menu-card');

    // Update the current slide index based on direction
    currentSlide += direction;

    // Loop back to the first slide when reaching the last one
    if (currentSlide < 0) {
      currentSlide = menuSlides.length - 1;
    }
    if (currentSlide >= menuSlides.length) {
      currentSlide = 0;
    }

    // Calculate the new transform value to move the slider
    const slideWidth = menuSlides[0].offsetWidth + 20; // 20px is for the margin between cards
    menuSlider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  // Function to add items to the cart
  function addToCart(itemName, price) {
    console.log(`Added to cart: ${itemName} for IDR ${price}`);
    // Here you can add additional logic to update the cart on your site
  }

  // Optional: Automatically move the menu slider every 5 seconds
  setInterval(() => {
    moveMenuSlide(1); // Move the menu slider to the next slide
  }, 5000); // Set interval of 5 seconds

