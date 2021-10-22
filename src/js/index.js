window.$ = window.jQuery = require('jquery');

$(document).ready(function () {
    $('.header').on('click', '.header__mobile-menu, .navigation__close', function () {
        $('.navigation').slideToggle();
    })

    const swiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    })
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


