$(document).ready(function () {
    $(".main-content").load("pages/main.html");

    $("#nav-ul li").click(function () {
        var item_id = $(this).attr("id");
        var location = "../pages/" + item_id + ".html";
        $(".main-content").load(location);
    });

    $("#site-tips").animate({ top: '0px' });

    $(window).resize(function () {
        var nav_width = $(".nav").width();
        var main_width = $(".main").width();
    });
});

function action_closeTip() {
    $("#site-tips").animate({ top: '-30px' });
}