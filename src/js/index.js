window.$ = window.jQuery = require('jquery');
//import Swiper from 'swiper';

$(document).ready(function () {
    $('.header').on('click', '.header__mobile-menu, .navigation__close', function () {
        $('.navigation').slideToggle();
    })

    const reviews = new Swiper('.reviews__slider', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            
        },

        autoplay: {
            delay: 5000,
        }
    });
   
});

$(window).resize(function () {
    if ($(window).width() >= 768) {
        $('.navigation').attr('style', '')
    }
});

$(window).scroll(function () {
    const header = $('.header');
    const windowPosition = $(window).scrollTop();
    const bannerHeight = $('#banner').outerHeight();

    (windowPosition >= bannerHeight - header.outerHeight()) ? header.addClass('sticky') : header.removeClass('sticky');
})
