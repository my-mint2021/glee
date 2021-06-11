$(function () {


  $('.related__slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


// табы страница товара
  $('.details-tabs__link').on("click", function (e) {
    e.preventDefault();
    $('.details-tabs__link').removeClass('details-tabs__link--active');
    $(this).addClass('details-tabs__link--active');
    
    $('.details-tabs__descr').removeClass('details-tabs__descr--active');
    $($(this).attr('href')).addClass('details-tabs__descr--active');
    
  });

$('.details-slide__small').slick({
  asNavFor: '.details-slide__big',
  focusOnSelect: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  vertical: true,
  draggable: false,
  responsive: [
    {
      breakpoint: 568,
      settings: {
        vertical: false
      }
    }]

});

$('.details-slide__big').slick({
  asNavFor: '.details-slide__small',
  draggable: false,
  arrows: false,
});



$('.shop__select, .details-item__counter').styler();

// номера страниц снизу
  $('.pagination__btn').on("click", function () {

    $('.pagination__btn').removeClass('pagination__btn--active');
    $(this).addClass('pagination__btn--active');
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
    $('.pagination__list').addClass('pagination__list--list');
  });
  $('.btn-grid').on("click", function () {
    $('.shop__list').removeClass('shop__list--list');
    $('.product-card').removeClass('product-card--list');
    $('.pagination__list').removeClass('pagination__list--list');
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
  $('.prod-filter').on("click", function() {
    $('.prod-filter').toggleClass('prod-filter--active');
    $('.shop__sidebar').toggleClass('shop__sidebar--active');
    $('.aside-order').toggleClass('aside-order--active');
    $('body').toggleClass('body--lock');
  });



  $('.shop__button').on("click", function () {
    $('.prod-filter').removeClass('prod-filter--active');
    $('.shop__sidebar').removeClass('shop__sidebar--active');
    $('.aside-order').removeClass('aside-order--active');
    $('body').removeClass('body--lock');
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

  $(".details__star").rateYo({
    starWidth: "20px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });


  var mixer1 = mixitup(mixEl1, config);
  var mixer2 = mixitup(mixEl2, config);

});