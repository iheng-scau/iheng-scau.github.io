$(function () {
    $(".nav .tab:eq(0)").css("width", "40%");
    $(".nav .tab:eq(0)").siblings("li").animate({ "width": "20%", "opacity": "0.2" }, "fast");

    var curli = 1;
    $(".nav .tab").click(function () {
        var clickli = $(this).index();
        if (curli == clickli) {
            return;
        }
        curli = clickli;
        $(this).siblings(".tab").animate({ "width": "20%", "opacity": "0.2" }, "fast");
        $(this).animate({ "width": "40%", "opacity": "1" });
    });
});