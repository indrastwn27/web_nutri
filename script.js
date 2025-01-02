
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
  let currentSlide = 0; // Melacak indeks slide saat ini

function moveMenuSlide(direction) {
  const menuSlider = document.querySelector('.menu-slider'); // Mengambil elemen slider
  const menuSlides = document.querySelectorAll('.menu-card'); // Mengambil semua elemen kartu menu

  // Mengupdate indeks slide berdasarkan arah (ke kiri atau kanan)
  currentSlide += direction;

  // Menangani looping slide (kembali ke slide pertama atau terakhir)
  if (currentSlide < 0) {
    currentSlide = menuSlides.length - 1; // Jika melampaui awal, kembali ke slide terakhir
  } else if (currentSlide >= menuSlides.length) {
    currentSlide = 0; // Jika melampaui akhir, kembali ke slide pertama
  }

  // Menghitung nilai transformasi baru untuk memindahkan slider
  const slideWidth = menuSlides[0].offsetWidth + 20; // Lebar slide ditambah jarak antar slide
  menuSlider.style.transform = `translateX(-${currentSlide * slideWidth}px)`; // Geser slider
}

// Hapus atau komentar fungsi gerakan otomatis slider
// setInterval(() => {
//   moveMenuSlide(1); // Pindah otomatis ke slide berikutnya setiap 5 detik
// }, 5000);

