window.addEventListener('DOMContentLoaded', function () {
    var sliderContainer = document.getElementById('sliderContainer');
    var swipercontainer = document.getElementById('swiper-container');
    if (sliderContainer) {

        sliderContainer.addEventListener('mouseenter', function () {
            scrollToSection();
        });
    }
    function scrollToSection() {
        var yOffset = sliderContainer.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({ top: yOffset, behavior: 'smooth' });
    }

    //$(document).ready(function () {
    //    // Function to handle intersection observer
    //    function animateFeatures(entries, observer) {
    //        entries.forEach(entry => {
    //            if (entry.isIntersecting) {
    //                $(entry.target).addClass('animate__animated');
    //                // Add animation classes based on the feature
    //                if ($(entry.target).hasClass('feature1')) {
    //                    $(entry.target).addClass('animate__fadeInLeft');
    //                } else if ($(entry.target).hasClass('feature2')) {
    //                    $(entry.target).addClass('animate__fadeInDown');
    //                } else if ($(entry.target).hasClass('feature3')) {
    //                    $(entry.target).addClass('animate__fadeInRight');
    //                } else if ($(entry.target).hasClass('feature4')) {
    //                    $(entry.target).addClass('animate__fadeInLeft');
    //                } else if ($(entry.target).hasClass('feature5')) {
    //                    $(entry.target).addClass('animate__fadeIn');
    //                } else if ($(entry.target).hasClass('feature6')) {
    //                    $(entry.target).addClass('animate__fadeInRight');
    //                }
    //                observer.unobserve(entry.target);
    //            }
    //        });
    //    }

        //// Create an intersection observer instance
        //let observer = new IntersectionObserver(animateFeatures, { root: null, threshold: 0.5 });

        //// Observe each feature
        //$('.feature').each(function () {
        //    observer.observe(this);
        //});



    //document.querySelectorAll('.question-header').forEach(item => {
    //    item.addEventListener('click', event => {
    //        const answer = item.nextElementSibling;
    //        const icon = item.querySelector('.toggle-icon');
    //        answer.classList.toggle('show');
    //        icon.classList.toggle('rotate');
            
    //    });
    //});

    $('.question-header').click(function () {
        var answer = $(this).next('.answer');
        const icon = $(this).siblings('.toggle-icon');
        answer.toggleClass('show');
        icon.toggleClass('rotate');
    });


    });
    //$(document).ready(function () {
    //    $('.mil-accordion-head').click(function () {
    //        $(this).closest('.mil-accordion-menu').next('.mil-accordion-content').toggleClass('content-show');

    //        // Check if all elements with content-show class within timeline have been applied
    //        var allContentShown = $('.timeline .content-show').length === $('.timeline .mil-accordion-content').length;

    //        if (allContentShown) {
    //            // Apply the class to the relevant element
    //            // Replace '.element-to-apply-class' with your actual selector
    //            $('.element-to-apply-class').addClass('content-show');
    //        }
    //    });
    //});


//});
$(document).ready(function () {
    $('#myTab button').on('click', function (e) {
        var buttonId = $(this).attr('id');
        var targetPaneId = buttonId + '-pane';

        // Remove the 'active' class from all elements with class 'tab-pane' inside 'tab-content'
        $('.nav-item .nav-link').removeClass('active');
        $('.tab-content .tab-pane').removeClass('active');
        $('.tab-content .tab-pane').removeClass('show');

        // Add the 'active' class to the specific tab pane div
        $('#' + targetPaneId).addClass('active').fadeIn();
        $('#' + targetPaneId).addClass('show');
        $(this).addClass('active');
    });
});
$(document).ready(function () {
    // Function to set data in localStorage with expiration time
function setWithExpiry(key, value, ttl) {
    const now = new Date();
    const item = {
        value: value,
        expiry: now.getTime() + ttl * 1000 // Convert ttl from seconds to milliseconds
    };
    localStorage.setItem(key, JSON.stringify(item));
}

// Function to get data from localStorage
function getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) {
        return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
        localStorage.removeItem(key); // Remove the item if it has expired
        return null;
    }
    return item.value;
}

// Check if preloader should be shown
const preloaderKey = 'showPreloader';
const preloaderShown = getWithExpiry(preloaderKey);
if (!preloaderShown) {
    if (window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '/ashleydemo.io/' || window.location.pathname === '/ashleydemo.io/index.html' ) {
        $('.mil-preloader').css('display', 'block');
         $('.loader-overlay').addClass('hidden');
        setWithExpiry(preloaderKey, true, 24 * 60 * 60); // Set the preloader to be shown for 24 hours
    }
} else {
    $('.mil-preloader').css('display', 'none');
}


    setTimeout(function () {
        $('.loader-overlay').addClass('hidden'); // Add 'hidden' class to start transition
    }, 450);
   

    
    
});
function toggleDetails(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'block') {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}
//document.addEventListener('DOMContentLoaded', () => {
//    const navbarMenu = document.querySelector('.navbar-menu');
//    const navbar = document.querySelector('.navbar');
 
//    const sections = document.querySelectorAll('.mil-content');
//    window.addEventListener('scroll', () => {
//        sections.forEach(section => {
//            const rect = section.getBoundingClientRect();
//            if (rect.top <= 0 && rect.bottom >= 0) {
//                if (getComputedStyle(section).backgroundColor === '#fff') { // dark background
//                    navbar.classList.remove('navbar-light');
//                    navbar.classList.add('navbar-dark');
//                } else {
//                    navbar.classList.remove('navbar-dark');
//                    navbar.classList.add('navbar-light');
//                }
//            }
//        });
//    });
//});

// custom.js

