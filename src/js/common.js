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

    var swiper = new Swiper ('.swiper-container', {
        pagination: '.swiper-pagination',
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
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    });

    $(function() {
        $(".first-face-text").truncateText();
    });


    $(".menu-toggle").click(
        function () {
            $('.menu-wrap').toggleClass("nav-opened");
        }
    );
});
