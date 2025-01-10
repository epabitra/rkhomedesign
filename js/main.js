(function ($) {
  "use strict";

  const mobileNo = "+91 7328088547";
  const emailAddress = "info@rkdesign.com";
  const address = "Bustand Digapahandi";

  const nameLogo = "RK Design";
  var entities = document.querySelectorAll(".nameLogo");
  entities.forEach((div) => {
    div.innerHTML = nameLogo;
  });

  const picTitle = "Featured Image";
  var entities = document.querySelectorAll(".picTitle");
  entities.forEach((div) => {
    div.innerHTML = picTitle;
  });

  const titleTitle = "";
  var entities = document.querySelectorAll(".titleTitle");
  entities.forEach((div) => {
    div.innerHTML = titleTitle;
  });

  const titleBanner =
    "<h1 class='text-white'>Expert 3D Home Design Services in Digapahandi</h1>";
  var entities = document.querySelectorAll(".title-banner");
  entities.forEach((div) => {
    div.innerHTML = titleBanner;
  });

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 45) {
      $(".nav-bar").addClass("sticky-top");
    } else {
      $(".nav-bar").removeClass("sticky-top");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 24,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
})(jQuery);
