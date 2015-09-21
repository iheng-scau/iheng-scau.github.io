$(document).ready(function () {
    $(".main-content").load("pages/main.html");

    $("#nav-ul li").click(function () {
        var item_id = $(this).attr("id");
        var location = "../pages/" + item_id + ".html";
        $(".main-content").load(location);
    });

    $("#site-tips").animate({ top: '0px' });

    //nav和main的高度对齐
    var nav_height = $(".nav").height();
    $(".main").css("height", nav_height);
    $(window).resize(function () {
        var nav_height = $(".nav").height();
        $(".main").css("height", nav_height);
    });
});

function action_closeTip() {
    $("#site-tips").animate({ top: '-30px' });
}