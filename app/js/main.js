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

  // var mixer = mixitup('.products-week__items');
  // var mixer = mixitup('.design');


  var mixEl1 = document.querySelector('[data-ref="mix-1"]');
  var mixEl2 = document.querySelector('[data-ref="mix-2"]');
 
  var config = {
    controls: {
      scope: 'local'
    }
  };
 
  var mixer1 = mixitup(mixEl1, config);
  var mixer2 = mixitup(mixEl2, config);



});