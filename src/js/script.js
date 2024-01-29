window.addEventListener('scroll', function(e) {
    document.body.style.cssText = `--scrollTop: ${window.scrollY}px`;
});

$(document).ready(function(){
    $('.explore__destinations').slick({
        infinite: true,
        slidesToShow: 1.6,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg" alt="arrow"></button>',
        nextArrow: false,
        autoplay: true,
        autoplaySpeed: 1800,
        centerPadding: '30px',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                centerPadding: '20px'
              }
            }, 
            {
                breakpoint: 576,
                settings: {
                    centerMode: true,
                    centerPadding: '20px',
                }
              }, 
              {
                breakpoint: 425,
                settings: {
                    slidesToShow: 2
                }
              }, 
        ]
      });
});

$(document).ready(function(){
    $('.reviews__items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      });
});

const stars = document.querySelectorAll(".reviews__raiting-stars input");

stars.forEach((star, index) => {
    star.addEventListener("click", () => {
        const rating = star.value;
        star.classList.toggle("selected");
        for (let i = 0; i < index; i++) {
            stars[i].classList.add("selected");
        }
        for (let i = index + 1; i < stars.length; i++) {
            stars[i].classList.remove("selected");
        }
    });
});

$('[data-modal="login"]').on('click',function() {
    $('.overlay, #password').hide();
    $('.overlay, #login').fadeIn('slow');
});

$('.login__close').on('click', function(){
    $('.overlay, #login, #signup, #password').fadeOut('slow');
});

$('.header__signup').on('click',function() {
    $('.overlay, #password').hide();
    $('.overlay, #signup').fadeIn('slow');
});

$('.login__link').on('click',function() {
    $('.overlay, #login').fadeOut('fast');
    $('.overlay, #password').fadeIn('slow');
});

$('.login__signup').on('click',function() {
    $('.overlay, #login').hide();
    $('.overlay, #signup').fadeIn('slow');
});

const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.header__list'),
    close = document.querySelector('.header__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

