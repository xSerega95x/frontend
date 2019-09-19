$(document).ready(function () {
    $("a[href*='#']")
        .not($("a[href*='#block-']")) // Для корректной работы компонента tabs
        .on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 777);
            e.preventDefault();
            return false;
        });
});