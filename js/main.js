$(document).ready(function () {

    $(".timeline li:gt(0) .content-desc").hide();

    $(".hide").click(function () {
        $(this).toggleClass("rotate");
        $(this).parents(".timestamp-content").children(".content-desc").toggle("normal");
    });
});

function action_close(){
    $(".main-title").hide("normal");
}