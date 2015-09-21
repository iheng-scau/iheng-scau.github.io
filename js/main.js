$(document).ready(function () {
    $(".hide").click(function () {
        $(this).parents(".timestamp-content").children(".content-desc").toggle("normal");
    });
});