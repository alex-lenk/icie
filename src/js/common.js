$(document).ready(function () {

    $(".main-nav-toggle").click(
        function () {
            $('.main-nav').toggleClass("menu-visible");
        }
    );

    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<div data-role="none" class="slick-prev" aria-label="Previous" tabindex="0"><span><svg class="arrow"><use xlink:href="theme/img/sprite.svg#arrow"></use></svg></span></div>',
        nextArrow: '<div data-role="none" class="slick-next" aria-label="Next" tabindex="0"><span><svg class="arrow"><use xlink:href="theme/img/sprite.svg#arrow"></use></svg></span></div>'
    });

    jQuery(function($){
        $(".phone-mask").mask("+7(999) 999-9999");
    });
});
