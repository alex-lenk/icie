$(document).ready(function () {
// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.head.appendChild(msViewportStyle)
    }

    $(".search-top-icon").click(
        function () {
            $('.search-top').toggleClass("search-top-opened");
        }
    );

    $(".language-bar-current").click(
        function () {
            $('.language-bar').toggleClass("language-bar-opened");
        }
    );

    var swiper = new Swiper('.partners-carousel', {
        paginationClickable: true,
        slidesPerView: 6,
        spaceBetween: 50,
        breakpoints: {
            1199: {
                slidesPerView: 5,
                spaceBetween: 40
            },
            992: {
                slidesPerView: 4,
                spaceBetween: 30
            },
            570: {
                slidesPerView: 2,
                spaceBetween: 20
            }
        }
    });

    var swiper = new Swiper('.gallery', {
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 30,
        grabCursor: true,
        nextButton: '.gallery-next',
        prevButton: '.gallery-prev',
        breakpoints: {
            1199: {
                slidesPerView: 5,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            570: {
                spaceBetween: 20,
                slidesPerView: 'auto',
                centeredSlides: true,
                grabCursor: true,
                autoplay: 4000,
                autoplayDisableOnInteraction: false
            }
        }
    });


    $(".menu-toggle, .close-menu").click(
        function () {
            $('.menu-wrap').toggleClass("nav-opened");
            $('body').toggleClass("overflow");
        }
    );

    $(".dropdown-item").click(
        function () {
            $(this).toggleClass("dropdown-item-opened");
        }
    );

    $(".ellipsis").dotdotdot();
    $(".last-news-text").dotdotdot();


    /* BEGIN: Плавающий блок в сайдбаре */
    var
        $window = $(window), //Основное окно
        $sidebar = $(".sidebar"), // Блок, который нужно фиксировать при прокрутке
        $sidebarMenu = $(".sidebar-menu"); // Блок, который нужно фиксировать при прокрутке

    if ($sidebar.length) {
        $h = $sidebar.offset().top; // Определяем координаты верха нужного блока (например, с навигацией или виджетом, который надо фиксировать)

        $window.on('scroll', function () {
            // Как далеко вниз прокрутили страницу
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Если прокрутили скролл ниже макушки нужного блока, включаем ему фиксацию
            if (scrollTop > $h) {

                $sidebarMenu.addClass("fixed");
                // Иначе возвращаем всё назад
            } else {
                $sidebarMenu.removeClass("fixed");
            }
        });
    }
    /* END */

    $('.grid').masonry({
        // options
        itemSelector: '.grid-item'
    });

});
