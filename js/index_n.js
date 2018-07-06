$(function () {
    $("#project-content").load("pages/projects.html");
    $("#article-content").load("pages/articles.html");
    $("#profile-content").load("pages/profiles.html");

    $(".nav li:eq(1)").css("width","70%");
    $(".nav li:eq(1)").siblings("li").animate({"width":"15%","opacity":"0.2"},"fast");

    $(".nav li").click(function(){
        $(this).siblings("li").animate({"width":"15%","opacity":"0.2"},"fast");
        $(this).animate({"width":"70%","opacity":"1"});
    });
});