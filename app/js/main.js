$(function () {

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false
  });

  $('.partners__list').slick({
    dots: false,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  });


  var mixer = mixitup('.products-week__items');
  var mixer = mixitup('.design');
});