window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("mainNav").style.padding = "12px 10px";
    // document.getElementById("logoimg").style.width = "25px";
  }
  else {
    document.getElementById("mainNav").style.padding = "25px 10px";
    // document.getElementById("logoimg").style.width = "35px";
  }
}

// (function($) {
//     "use strict"; // Start of use strict
  
//     // Smooth scrolling using jQuery easing
//     $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//       if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//         if (target.length) {
//           $('html, body').animate({
//             scrollTop: (target.offset().top - 54)
//           }, 1000, "easeInOutExpo");
//           return false;
//         }
//       }
//     });
  
//     // Closes responsive menu when a scroll trigger link is clicked
//     $('.js-scroll-trigger').click(function() {
//       $('.navbar-collapse').collapse('hide');
//     });
  
//     // Activate scrollspy to add active class to navbar items on scroll
//     $('body').scrollspy({
//       target: '#mainNav',
//       offset: 56
//     });
  
//     // Collapse Navbar
//     var navbarCollapse = function() {
//       if ($("#mainNav").offset().top > 100) {
//         $("#mainNav").addClass("navbar-shrink");
//         //$('.nav-link').addClass("list-group-item");
        
//       } else {
//         $("#mainNav").removeClass("navbar-shrink");
//         //$('.nav-link').removeClass("list-group-item");
//       }
//     };
//     // Collapse now if page is not at top
//     navbarCollapse();
//     // Collapse the navbar when page is scrolled
//     $(window).scroll(navbarCollapse);
    
  
//   })(jQuery); // End of use strict
