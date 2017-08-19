// Определяем мобильный браузер
function MobileDetect() {
    var UA = navigator.userAgent.toLowerCase();
    return (/android|webos|iris|bolt|mobile|iphone|ipad|ipod|iemobile|blackberry|windows phone|opera mobi|opera mini/i.test(UA)) ? true : false;
}

var sidebarFilter = $("#mse2_filters"),
    fixedSidebarFilter = 'fixed',
    mainNav = $(".main-nav"),
    mainNavFixed = 'main-nav-fixed';

$window = $(window);

$h2 = mainNav.offset().top;
$window.scroll(function () {
    // Если прокрутили скролл ниже макушки блока, включаем фиксацию
    if ($window.scrollTop() > $h2) {
        mainNav.addClass(mainNavFixed);
    } else {
        //Иначе возвращаем всё назад
        mainNav.removeClass(mainNavFixed);
    }
});

// Если браузер не мобильный, работаем
if (!MobileDetect()) {
    if (sidebarFilter.length) {
        // Определяем координаты верха блока навигации
        $h = sidebarFilter.offset().top;
        $window.scroll(function () {
            // Если прокрутили скролл ниже макушки блока, включаем фиксацию
            if ($window.scrollTop() > $h) {
                sidebarFilter.addClass(fixedSidebarFilter);
            } else {
                //Иначе возвращаем всё назад
                sidebarFilter.removeClass(fixedSidebarFilter);
            }
        });
    }
}
