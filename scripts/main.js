$(document).ready(function () {
   $(`.rev__slider`).slick({
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 250,
      accessibility: false,
      arrows: false,
//      centerMode: true,
      dots: true,
      draggable: true,
      mobileFirst: true,
   })
});