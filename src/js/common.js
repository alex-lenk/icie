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
});
