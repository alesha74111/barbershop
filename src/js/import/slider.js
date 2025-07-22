$(document).ready(() => {
    $('.sidebar-hero__slider').slick({
    autoplay: true,
    autoplaySpeed: 6000,
    dots: true,
    arrows: true,
    prevArrow: $('.sidebar-hero__control-link[aria-label="Previous slide"]'),
    nextArrow: $('.sidebar-hero__control-link[aria-label="Next slide"]'),
    });
});