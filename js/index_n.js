$(function () {
    $("#project-content").load("pages/projects.html");
    $("#article-content").load("pages/articles.html");
    $("#profile-content").load("pages/profiles.html");
    $("#favorite-content").load("pages/favorite.html");
    $("#issues-content").load("pages/issues.html");

    $(".nav li:eq(2)").css("width", "40%");
    $(".nav li:eq(2)").siblings("li").animate({ "width": "15%", "opacity": "0.2" }, "fast");

    var curli = 1;
    $(".nav li").click(function () {
        var clickli = $(this).index();
        if (curli == clickli) {
            return;
        }
        curli = clickli;
        $(this).siblings("li").animate({ "width": "15%", "opacity": "0.2" }, "fast");
        $(this).animate({ "width": "40%", "opacity": "1" });
    });
});