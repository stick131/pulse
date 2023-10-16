$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    prevArrow: '<button type="button" class="slick-prev"><img src=images/left.svg></button>',
    nextArrow: '<button type="button" class="slick-next"><img src=images/right.svg></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      },
    ]
  });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab__active)', function () {
    $(this)
      .addClass('catalog__tab__active').siblings().removeClass('catalog__tab__active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content__active').eq($(this).index()).addClass('catalog__content__active');
  });
});

