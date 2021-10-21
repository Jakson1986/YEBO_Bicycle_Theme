window.$ = window.jQuery = require('jquery');

$(document).ready(function () {
    $('.header').on('click', '.header__mobile-menu, .navigation__close', function () {
        $('.navigation').slideToggle();
    })
});

$(window).resize(function () {
    if ($(window).width() >= 768) {
        $('.navigation').attr('style', '')
    }
})