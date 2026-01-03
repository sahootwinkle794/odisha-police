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