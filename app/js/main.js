$(function () {

$('.shop__select').styler();

// номера страниц снизу
  $('.num-page__btn').on("click", function () {

    $('.num-page__btn').removeClass('num-page__btn--active');
    $(this).addClass('num-page__btn--active');
  });

// кнопки грид и лист
  $('.shop__btn').on("click", function () {
    $('.shop__btn').removeClass('shop__btn--active');
    $(this).addClass('shop__btn--active');
  });

  //смена грид/лист
  $('.btn-list').on("click", function () {
    $('.shop__list').addClass('shop__list--list');
    $('.product-card').addClass('product-card--list');
    $('.num-page__list').addClass('num-page__list--list');
  });
  $('.btn-grid').on("click", function () {
    $('.shop__list').removeClass('shop__list--list');
    $('.product-card').removeClass('product-card--list');
    $('.num-page__list').removeClass('num-page__list--list');
  });
  
 
    $('.burger-btn').on("click", function () {
      $('.burger-btn').toggleClass('burger-btn--active');
      $('.header__menu').toggleClass('header__menu--active');
      $('body').toggleClass('body--lock');
    });
 

  $('.menu').on("click", function () {
    $('.burger-btn').removeClass('burger-btn--active');
    $('.header__menu').removeClass('header__menu--active');
    $('body').removeClass('body--lock');
  });



// кнопка фильтра
  $('.shop__btn-filters').on("click", function() {
    $('.shop__sidebar').toggleClass('shop__sidebar--active');
    $('body').toggleClass('body--lock');
  });


  
  $('.aside__btn').on("click", function () {
    $('.shop__sidebar').removeClass('shop__sidebar--active');
  });
  // ------------------фильтры товаров скрыть/показать-------------

const filtersTitle = document.querySelectorAll('.filters__title');

filtersTitle.forEach(item =>{
  item.addEventListener('click', () => {
    item.nextElementSibling.classList.toggle('hidden-filter--hide');
  })
})

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
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 4,
        }
      },
      {
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

  // фильтр цен
  $(".filter-price__input").ionRangeSlider({
    type: "double",
   prefix: "$",

   onStart: function (data) {
    $('.filters-price__from').text(data.from);
    $('.filters-price__to').text(data.to);
   }, 
   onChange: function (data) {
    $('.filters-price__from').text(data.from);
    $('.filters-price__to').text(data.to);
   }

  });

  $(".star").rateYo({
    starWidth: "11px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });



  var mixer1 = mixitup(mixEl1, config);
  var mixer2 = mixitup(mixEl2, config);

});