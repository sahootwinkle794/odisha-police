// -------------------------------------------------------------- Scroll to Top button start --------------------------------------------------------------
const goToTopBtn = document.getElementById('goToTopBtn');

        window.onscroll = function () {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                goToTopBtn.style.display = "block";
            } else {
                goToTopBtn.style.display = "none";
            }
        };

        goToTopBtn.onclick = function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

// -------------------------------------------------------------- Scroll to Top button end --------------------------------------------------------------
// -------------------------------------------------------------- sticky navbar start --------------------------------------------------------------
const navbar = document.querySelector('.navbar');
        const logo = document.querySelector('.logo');

        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) { 
                navbar.classList.add('sticky'); 
            } else {
                navbar.classList.remove('sticky'); 
            }
        });
// -------------------------------------------------------------- sticky navbar end --------------------------------------------------------------
// --------------------------------------------------------------slick slider for New tab section end--------------------------------------------------------------
$(document).ready(function () {
    // Initialize the slick slider
    $(".news-sec").slick({
      infinite: true,
      slidesToShow: 4, // Default: Show 4 slides
      slidesToScroll: 1,
      prevArrow: $(".news-sec-prev"), // Link custom previous button
      nextArrow: $(".news-sec-next"), // Link custom next button
      responsive: [
        {
          breakpoint: 1024, // When screen width is 1024px or less
          settings: {
            slidesToShow: 3, // Show 3 slides
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // When screen width is 768px or less
          settings: {
            slidesToShow: 2, // Show 2 slides
            slidesToScroll: 1,
          },
        },
  
        {
          breakpoint: 480, // When screen width is 480px or less
          settings: {
            slidesToShow: 1, // Show 1 slide
            slidesToScroll: 1,
          },
        },
      ],
    });
  });
  //-------------------------------------------------------------- slick slider for New tab section end--------------------------------------------------------------
  

// --------------------------------------------------------------slick slider for event section start--------------------------------------------------------------
$(document).ready(function () {
  // Initialize the slick slider
  $(".eve-sec").slick({
    infinite: true,
    slidesToShow: 4, // Default: Show 4 slides
    slidesToScroll: 1,
    prevArrow: $(".eve-sec-prev"), // Link custom previous button
    nextArrow: $(".eve-sec-next"), // Link custom next button
    responsive: [
      {
        breakpoint: 1024, // When screen width is 1024px or less
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // When screen width is 768px or less
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 480, // When screen width is 480px or less
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  });
});
//-------------------------------------------------------------- slick slider for event section end--------------------------------------------------------------

//-------------------------------------------------------------- gallery slider for event section start--------------------------------------------------------------
$(document).ready(function () {
  $(".gall-sec").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $(".gall-sec-prev"),
    nextArrow: $(".gall-sec-next"),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
// Set up the default view (photo gallery active by default)
document.addEventListener("DOMContentLoaded", function () {
  // Show the photo gallery by default and hide the video gallery
  document.getElementById("photoGallery").style.display = "block";
  document.getElementById("videoGallery").style.display = "none";

  // Show the photo navigation buttons and hide the video navigation buttons
  document.getElementById("photos-btn").style.display = "block";
  document.getElementById("vdos-btn").style.display = "none";

  // Add active class to the photos button by default
  document.getElementById("photosBtn").classList.add("active");
  document.getElementById("videosBtn").classList.remove("active");

  // Wait for a short delay to ensure the slider is visible before refreshing
  setTimeout(function () {
    if (typeof jQuery !== "undefined" && typeof $.fn.slick !== "undefined") {
      $("#photoGallery").slick("refresh");
    }
  }, 100);
});
// Photos button click event
document.getElementById("photosBtn").addEventListener("click", function () {
  // Show the photo gallery, hide the video gallery
  document.getElementById("photoGallery").style.display = "block";
  document.getElementById("videoGallery").style.display = "none";

  // Show the photo navigation buttons and hide the video navigation buttons
  document.getElementById("photos-btn").style.display = "block";
  document.getElementById("vdos-btn").style.display = "none";

  // Add active class to the photo button, remove from the video button
  this.classList.add("active");
  document.getElementById("videosBtn").classList.remove("active");

  // Refresh slick slider for the photo gallery (if needed)
  $("#photoGallery").slick("refresh");
});
// Videos button click event
document.getElementById("videosBtn").addEventListener("click", function () {
  // Show the video gallery, hide the photo gallery
  document.getElementById("photoGallery").style.display = "none";
  document.getElementById("videoGallery").style.display = "block";

  // Show the video navigation buttons, hide the photo navigation buttons
  document.getElementById("photos-btn").style.display = "none";
  document.getElementById("vdos-btn").style.display = "block";

  // Add active class to the video button, remove from the photo button
  this.classList.add("active");
  document.getElementById("photosBtn").classList.remove("active");

  // Refresh slick slider for the video gallery (if needed)
  $("#videoGallery").slick("refresh");
});
// Function to show the selected tab content
function showTab(index) {
  // Get all tab buttons and contents
  let buttons = document.querySelectorAll(".tab-button");
  let contents = document.querySelectorAll(".tab-content");

  // Remove 'active' class from all tab buttons and content
  buttons.forEach((button) => {
    if (!button.classList.contains("slick-prev") && !button.classList.contains("slick-next")) {
      button.classList.remove("active");
    }
  });
  contents.forEach((content) => content.classList.remove("active"));

  // Add 'active' class to the clicked tab button and corresponding content
  if (buttons[index]) {
    buttons[index].classList.add("active");
  }
  if (contents[index]) {
    contents[index].classList.add("active");
  }

  // Initialize the Slick slider for the News tab only when it is active
  if (index === 3) { // 3 is the index for "News" tab
    initSlickSlider();
  }
}

// Function to initialize Slick Slider
function initSlickSlider() {
  // Check if the slider is already initialized before initializing again
  if (typeof $('.news-sec.slider').slick === 'function') {
    $('.news-sec.slider').slick('unslick'); // Uninitialize the existing Slick slider if it's initialized
  }

  // Initialize the Slick slider
  $('.news-sec.slider').slick({
    slidesToShow: 4, // Example settings for the Slick slider
    slidesToScroll: 1,
    arrows: true, // Show arrows
    prevArrow: $('.slick-prev.news-sec-prev'), // Custom prev button
    nextArrow: $('.slick-next.news-sec-next'), // Custom next button
  });
}

// Ensure the first tab (index 0) is active on page load
document.addEventListener("DOMContentLoaded", () => {
  showTab(0); // You can change this to any initial index if you want another tab active on load
});


// tab script start
const elements = document.querySelectorAll(".live-h3, .gall-text2");
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.5,
  }
);
elements.forEach((element) => {
  observer.observe(element);
});
// tab script end
//-------------------------------------------------------------- gallery slider for event section end--------------------------------------------------------------

//-------------------------------------------------------------- Aos script start--------------------------------------------------------------
AOS.init();

if (window.innerWidth > 500) {
  AOS.init({
    disable: false, // Enable AOS on large screens
  });
} else {
  AOS.init({
    disable: true, // Disable AOS on mobile screens
  });
}
//-------------------------------------------------------------- Aos script end--------------------------------------------------------------

//-------------------------------------------------------------- aggregate script start--------------------------------------------------------------
$(document).ready(function () {
  $(".agr-cards").slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: $(".agr-cards-prev"),
    nextArrow: $(".agr-cards-next"),
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
//-------------------------------------------------------------- aggregate script end--------------------------------------------------------------

//-------------------------------------------------------------- fontsize decrease and increase script start--------------------------------------------------------------
function getComputedFontSize(element) {
  return parseInt(window.getComputedStyle(element).fontSize);
}
let bodyInitialFontSize = getComputedFontSize(document.body);
let h3InitialFontSize = getComputedFontSize(document.querySelector("h3"));
let h6InitialFontSize = getComputedFontSize(document.querySelector("h6"));
let pInitialFontSize = getComputedFontSize(document.querySelector("p"));
document.querySelector(".minus-a").addEventListener("click", function () {
  let currentBodyFontSize = getComputedFontSize(document.body);
  document.body.style.fontSize = currentBodyFontSize - 1 + "px";

  let currentH3FontSize = getComputedFontSize(document.querySelector("h3"));
  document.querySelector("h3").style.fontSize = currentH3FontSize - 1 + "px";

  let currentH6FontSize = getComputedFontSize(document.querySelector("h6"));
  document.querySelector("h6").style.fontSize = currentH6FontSize - 1 + "px";

  let currentPFontSize = getComputedFontSize(document.querySelector("p"));
  document.querySelector("p").style.fontSize = currentPFontSize - 1 + "px";
});

document.querySelector(".plus-a").addEventListener("click", function () {
  let currentBodyFontSize = getComputedFontSize(document.body);
  document.body.style.fontSize = currentBodyFontSize + 1 + "px";

  let currentH3FontSize = getComputedFontSize(document.querySelector("h3"));
  document.querySelector("h3").style.fontSize = currentH3FontSize + 1 + "px";

  let currentH6FontSize = getComputedFontSize(document.querySelector("h6"));
  document.querySelector("h6").style.fontSize = currentH6FontSize + 1 + "px";

  let currentPFontSize = getComputedFontSize(document.querySelector("p"));
  document.querySelector("p").style.fontSize = currentPFontSize + 1 + "px";
});

document.querySelector(".nrml-a").addEventListener("click", function () {
  document.body.style.fontSize = bodyInitialFontSize + "px";
  document.querySelector("h3").style.fontSize = h3InitialFontSize + "px";
  document.querySelector("h6").style.fontSize = h6InitialFontSize + "px";
  document.querySelector("p").style.fontSize = pInitialFontSize + "px";
});
//-------------------------------------------------------------- fontsize decrease and increase script end --------------------------------------------------------------

//-------------------------------------------------------------- darkmode and lightmode script start --------------------------------------------------------------
// Get the elements for light and dark mode
const lightModeToggle = document.querySelector(".light-a");
const darkModeToggle = document.querySelector(".dark-a");
// Function to enable dark mode
darkModeToggle.addEventListener("click", () => {
  document.body.classList.add("dark-mode");
});
// Function to enable light mode
lightModeToggle.addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
});
//-------------------------------------------------------------- darkmode and lightmode script end --------------------------------------------------------------

//-------------------------------------------------------------- glance slick script start --------------------------------------------------------------
$(document).ready(function () {
  // Initialize the slick slider
  $(".glance-sec").slick({
    infinite: true,
    slidesToShow: 4, // Default: Show 4 slides
    slidesToScroll: 1,
    prevArrow: $(".glance-sec-prev"), // Link custom previous button
    nextArrow: $(".glance-sec-next"), // Link custom next button
    responsive: [
      {
        breakpoint: 1024, // When screen width is 1024px or less
        settings: {
          slidesToShow: 3, // Show 3 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // When screen width is 768px or less
        settings: {
          slidesToShow: 2, // Show 2 slides
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // When screen width is 480px or less
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1,
        },
      },
    ],
  });
});
//-------------------------------------------------------------- glance slick script end --------------------------------------------------------------

//------------------------------------------------------------ submenu script start --------------------------------------------------------------
// JavaScript to toggle the submenu visibility on click/tap
const submenuItems = document.querySelectorAll(".submenu > a");

submenuItems.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    const submenu = this.parentElement;
    submenu.classList.toggle("active");
  });
});

// Get all menu items with submenus
const menuItems = document.querySelectorAll(".menu-item.submenu");

// Loop through each menu item
menuItems.forEach((item) => {
  // Add click event listener to each menu item
  item.addEventListener("click", function (event) {
    // Check if the clicked element is a submenu link; if so, do nothing
    if (event.target.closest(".submenu-items a")) {
      return; // Allow the link to be clicked normally
    }

    // Prevent default behavior only if the item is being clicked directly (not a link inside it)
    event.preventDefault();

    // Check if the clicked submenu is already open
    const isOpen = item.classList.contains("open");

    // Close all submenus
    menuItems.forEach((submenu) => {
      submenu.classList.remove("open");
      submenu.querySelector(".submenu-items").style.display = "none";
    });

    // If the clicked submenu was not already open, open it
    if (!isOpen) {
      item.classList.add("open");
      item.querySelector(".submenu-items").style.display = "block";
    }
  });
});


//------------------------------------------------------------ submenu script end --------------------------------------------------------------
