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
        searchTopClose = $('.search-top-close'),
        searchTopOpened = 'search-top-opened';

    $('.search-top-icon').on('click', function () {
        if (searchTop.hasClass(searchTopOpened)) {
            searchTop.removeClass(searchTopOpened);
        } else {
            searchTop.addClass(searchTopOpened);
        }
    });

    searchTopClose.on('click', function () {
        searchTop.removeClass(searchTopOpened);
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
    var partnersSwiper = new Swiper('.partners-carousel', {
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
    var $gallery = $(".gallery");
    if ($gallery.length) {
        var gallerySwiper = new Swiper('.gallery', {
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
    }
    // END


    $('body').on('mouseup', function (e) {

        if (!$(e.target).closest("form.search-top-opened").length) {
            $('form.search-top').removeClass('search-top-opened');
        }

        if (!$(e.target).closest('.dropdown-link-opened').length) {
            $('ul.list-unstyled').find('li').removeClass('dropdown-link-opened');
        }

        if (!$(e.target).closest('.language-bar-opened').length) {
            $('.language-bar').removeClass('language-bar-opened');
        }

        if (!$(e.target).closest('.grid-more-opened').length) {
            $('.grid-text').removeClass('grid-more-opened');
        }

    });


    // BEGIN: Открытие и закрытие основного меню сайта


    $(".menu-toggle, .close-menu").click(function () {
        $(".menu-wrap").toggleClass("nav-opened");
        $("body").toggleClass("overflow");
    });

    $(".dropdown-item").click(function () {
        $(this).toggleClass("dropdown-item-opened")
    });

    $(".dropdown-link").click(
        function () {
            $(this).parent().toggleClass("dropdown-link-opened");
        }
    );
    // END


    $(".grid-text p").click(
        function () {
            $(this).parent().toggleClass("grid-more-opened");
        }
    );


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
    //END

    // функция проверки полной видимости элемента
    var gridMore = $('.grid-more');
    if (gridMore.length) {
        function checkPosition() {

            // координаты дива
            var div_position = gridMore.offset();
            // отступ сверху
            var div_top = div_position.top;
            // отступ слева
            var div_left = div_position.left;
            // ширина
            var div_width = gridMore.width();
            // высота
            var div_height = gridMore.height();

            // проскроллено сверху
            var top_scroll = $(document).scrollTop();
            // проскроллено слева
            var left_scroll = $(document).scrollLeft();
            // ширина видимой страницы
            var screen_width = $(window).width();
            // высота видимой страницы
            var screen_height = $(window).height();

            // координаты углов видимой области
            var see_x1 = left_scroll;
            var see_x2 = screen_width + left_scroll;
            var see_y1 = top_scroll;
            var see_y2 = screen_height + top_scroll;

            // координаты углов искомого элемента
            var div_x1 = div_left;
            var div_x2 = div_left + div_height;
            var div_y1 = div_top;
            var div_y2 = div_top + div_width;

            // проверка - виден див полностью или нет
            if (div_x1 >= see_x1 && div_x2 <= see_x2 && div_y1 >= see_y1 && div_y2 <= see_y2) {
                // если виден
                gridMore.addClass('grid-more-left');
                gridMore.removeClass('grid-more-right');
            } else {
                // если не виден
                gridMore.addClass('grid-more-right');
                gridMore.removeClass('grid-more-left');
            }
        }

        $(document).scroll(function () {
            // при скролле страницы делаем проверку
            checkPosition();
        });

        // после загрузки страницы сразу проверяем
        checkPosition();

        // проверка при масштабировании и изменении размера страницы
        $(window).resize(function () {
            checkPosition();
        });
    }
    //END


    // BEGIN: Инициализация слайдера на главной страницы
    var $ourProjectList = $(".our-project-list"),
        $windowInnerWidth = window.innerWidth;


    if ($windowInnerWidth < 568 && $ourProjectList.length) {
        var ourProjectListSwiper = new Swiper('.our-project-list', {
            slidesPerView: 'auto',
            centeredSlides: true,
            grabCursor: true
        });
    }
    // END
});
