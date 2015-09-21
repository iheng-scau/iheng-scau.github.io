$(document).ready(function () {

    $(".timeline li:gt(0) .content-desc").hide();

    $(".hide").click(function () {
        $(this).parents(".timestamp-content").children(".content-desc").toggle("normal");
    });
});