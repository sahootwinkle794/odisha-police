// ---------------------------------------------------- banner slider start -------------------------------------------
$('.banner-owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    items: 1,
    nav: true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp'
})
// ------------------------------------------- banner slider end -------------------------------------------
// ---------------------------------------------------- tab content script start -------------------------------------------

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Remove the active class from all tab links
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Show the clicked tab's content and add active class to the clicked tab
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}


function openMyTab(evt, tabId) {
    const tabs = evt.currentTarget.parentElement.querySelectorAll('.my-tab');
    const contents = document.querySelectorAll('.my-tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    evt.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}


// ---------------------------------------------------- tab content script end -------------------------------------------
// ---------------------------------------------------- owl annum card slider start ---------------------------------------------------- 
 function initResponsiveCarousel() {
            const $slider = $('.annum-slider');
            const w = $(window).width();
            console.log('Window width:', w);

            if (w >= 0 && w < 1100) {
                if (!$slider.hasClass('owl-carousel')) {
                    console.log('Initializing carousel');
                    $slider.addClass('owl-carousel owl-theme').owlCarousel({
                        loop: false,
                        margin: 10,
                        nav: true,
                        dots: true,
                        responsive: {
                            0: { items: 1 },
                            450: { items: 2 },
                            650: { items: 3 },
                            800: { items: 4 },
                            1100: { items: 4 }
                        }
                    });
                }
            } else {
                if ($slider.hasClass('owl-carousel')) {
                    console.log('Destroying carousel');
                    $slider.trigger('destroy.owl.carousel');
                    $slider.removeClass('owl-carousel owl-theme');
                    const $stageOuter = $slider.find('.owl-stage-outer');
                    if ($stageOuter.length) {
                        $stageOuter.children().unwrap();
                    }
                }
            }
        }

        $(document).ready(function () {
            initResponsiveCarousel();
            $(window).on('resize', function () {
                clearTimeout(window.resizeTimeout);
                window.resizeTimeout = setTimeout(initResponsiveCarousel, 250);
            });
        });


// ---------------------------------------------------- owl annum card slider end ---------------------------------------------------- 

// ---------------------------------------------------- owl logo card slider start ---------------------------------------------------- 
$(document).ready(function () {
            $('.auto-multi-carousel').owlCarousel({
                loop: true,
                margin: 15,
                nav: false,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                smartSpeed: 1000,
                responsive: {
                    0: { items: 1 },
                    480: { items: 2 },
                    768: { items: 3 },
                    992: { items: 4 },
                    1200: { items: 9 }
                }
            });
        });
// ---------------------------------------------------- owl auto card slider end ---------------------------------------------------- 

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
