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


    // BEGIN: Для ошибок форм
    $(".ui-field").change(function () {
        if ($(this).val().trim().length) {
            $(this).parent().addClass("field-filled");
        } else {
            $(this).parent().removeClass("field-filled");
        }
    });
    //END


    // BEGIN: Для открытия и закрытия форм на страницы контактов при маленьком разрешении экрана
    $(".contacts-toggle").click(
        function () {
            $('.contacts-form-wrap').toggleClass("contacts-toggle-opened");
        }
    );
    //END



    // Всплывашка для страницы members.html
    var members = {
        $main: $('.grid'),
        w_main: 0,
        init: function () {
            var self = this;
            var scrollTimeout;


            $(window).resize(function () {
                if (scrollTimeout) {
                    clearTimeout(scrollTimeout);
                    scrollTimeout = null;
                }
                scrollTimeout = setTimeout(function () {
                    self.updateW();
                }, 250);
            });


            this.updateW();
            this.$main.find(".grid-text").on('click', 'p', {self: this}, function (e) {
                self = e.data.self;
                $(this).parent().toggleClass("grid-more-opened");

                var $el = $(this).closest('.grid-item'),
                    $pops = $(this).parent().find('.grid-more'),
                    w = {};

                /*set coordinates*/
                w.w_el = $el.outerWidth();
                w.w_pops = $pops.outerWidth();
                w.position_el = $el.position();
                w.w_main = self.w_main;

                self.positionW(w, $pops);

            });

        },
        positionW: function (w, $pops) {

            $pops.removeClass('grid-more-right').removeClass('grid-more-left');

            if ((w.w_el + w.position_el.left + 1) >= w.w_main && w.w_main != w.w_el) {
                $pops.addClass('grid-more-left');
                return true
            } else if ((w.w_el + w.position_el.left) < w.w_main) {
                $pops.addClass('grid-more-right');
                return true
            }

            return false

        },
        updateW: function () {
            this.w_main = this.$main.width();
        }
    };
    members.init();

    $(window).resize(function () {
        // checkPosition();
    });
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
