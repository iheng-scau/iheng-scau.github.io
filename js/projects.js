$(function () {
    $(".nav li:eq(2)").css("width", "40%");
    $(".nav li:eq(2)").siblings("li").animate({ "width": "20%", "opacity": "0.2" }, "fast");

    var curli = 1;
    $(".nav li").click(function () {
        var clickli = $(this).index();
        if (curli == clickli) {
            return;
        }
        curli = clickli;
        $(this).siblings("li").animate({ "width": "20%", "opacity": "0.2" }, "fast");
        $(this).animate({ "width": "40%", "opacity": "1" });
    });
});