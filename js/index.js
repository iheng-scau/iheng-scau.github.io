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

    //将nav切换为简约模式
    /**
    $("#resize-nav").click(function () {
        var class_name = $("#nav").attr("class");
        if (class_name == "nav") {
            $("#nav").animate({width:'50px'});
            $("#nav").removeClass("nav").addClass("nav-narrow");
            return;
        }
        $("#nav").removeClass("nav-narrow").addClass("nav");
    });**/
});

function action_closeTip() {
    $("#site-tips").animate({ top: '-30px' });
}

function action_shrinkFrontHeader() {
    var main_header_height = $(".main-header").css("height");
    if (main_header_height == "150px") {
        $(".main-header").animate({ height: '65px' });
        return;
    }
    $(".main-header").animate({ height: '150px' });
}