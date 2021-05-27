$(function () {


  $(document).ready(function () {
    $('.burger-btn').click(function (event) {
      $('.burger-btn').toggleClass('burger-btn--active');
      $('.menu').toggleClass('menu--active');
      // $('body').toggleClass('body--lock');
    });
  });

  $('.menu').on("click", function () {
    $('.burger-btn').removeClass('burger-btn--active');
    $('.menu').removeClass('menu--active');
    // $('body').removeClass('body--lock');
  });


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
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

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