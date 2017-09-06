$(document).ready(function () {
// Исправление бага в IE на телефонах
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

    // BEGIN: Открытие и закрытие поисковой панели в шапке сайта
    var searchTop = $('.search-top'),
        searchTopOpened = 'search-top-opened';

    $('.search-top-icon').on('click', function () {
        if (searchTop.hasClass(searchTopOpened)) {
            searchTop.removeClass(searchTopOpened);
        } else {
            searchTop.addClass(searchTopOpened);
        }
    });

    $(document).click(function (event) {
        if ($(event.target).closest('.search-top').length)
            return;
        searchTop.removeClass(searchTopOpened);
        event.stopPropagation();
    });
    // END


    // BEGIN: Открытие и закрытие языковой панели в шапке сайта
    $(".language-bar-current").click(
        function () {
            $('.language-bar').toggleClass("language-bar-opened");
        }
    );
    // END


    // BEGIN: Инициализация слайдера на главной странице в блоке партнеров
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
    // END


    // BEGIN: Инициализация слайдера на внутренних страницах
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
    // END


    // BEGIN: Открытие и закрытие основного меню сайта
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
    // END


    // BEGIN: Инициализация плагина для обрезки лишнего текст в блоках на главной
    $(".ellipsis").dotdotdot();
    $(".last-news-text").dotdotdot();
    // END


    /* BEGIN: Плавающий блок в сайдбаре */
    var
        $window = $(window), //Основное окно
        $sidebar = $(".sidebar"), // Блок, который нужно фиксировать при прокрутке
        $sidebarMenu = $(".side-block"); // Блок, который нужно фиксировать при прокрутке

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


    // BEGIN: Инициализация плагина для разбиении блоков
    $('.grid').masonry({
        // options
        itemSelector: '.grid-item'
    });


    // BEGIN: Для форм
    $(".ui-field").change(function () {
        if ($(this).val().trim().length) {
            $(this).parent().addClass("field-filled");
        } else {
            $(this).parent().removeClass("field-filled");
        }
    });


    // BEGIN: Для открытия и закрытия форм на страницы контактов при маленьком разрешении экрана
    $(".contacts-toggle").click(
        function () {
            $('.contacts-form-wrap').toggleClass("contacts-toggle-opened");
        }
    );
});
