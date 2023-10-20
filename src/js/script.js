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

  // Modal
  $('[data-modal=consultation]').on('click', function(){
    $('.overlay, #consultation').fadeIn('slow');
  });
  $('.modal__close').on('click', function(){
    $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
  });
  $('.catalog-item__btn').on('click', function(){
    $('.overlay, #order').fadeIn('slow');
  });

  // $('#consultation form').validate({
  //   rules:{
  //     name:{
  //       required:true,
  //       minlength: 3,
  //     },
  //     phone:"required",
  //     email:{
  //       required: true,
  //       email: true,

  //     }
  //   },
  //   messages:{
  //     name:{
  //       required:'Введите пожалуйста свое имя',
  //       minlength: jQuery.validator.format("Введите {0} симовола!")
  //     },
  //     phone:'Введите пожалуйста свой номер телефона',
  //     email:{
  //       required:'Пожалуйста введите свою почту'        
  //     }
  //   }
  // });
 

  function validForms(form){
    $(form).validate({
      rules:{
        name:{
          required:true,
          minlength: 3,
        },
        phone:"required",
        email:{
          required: true,
          email: true,
  
        }
      },
      messages:{
        name:{
          required:'Введите пожалуйста свое имя',
          minlength: jQuery.validator.format("Введите {0} симовола!")
        },
        phone:'Введите пожалуйста свой номер телефона',
        email:{
          required:'Пожалуйста введите свою почту'        
        }
      }
    });
  };
  validForms('#consultation-form');
  validForms('#consultation form');
  validForms('#order form');

  $('input[name=phone]').mask("+ 7 (999) 999-99-99");

  $(window).scroll(function(){
    if($(this).scrollTop() > 1600){
      $('.pageup').fadeIn();
    }else{
      $('.pageup').fadeOut();
    }
  });

  new WOW().init();
});

