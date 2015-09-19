$(document).ready(function () {
    $("#nav-ul li").click(function () {
        var item_id = $(this).attr("id");
        var location = "../pages/" + item_id + ".html";
        $(".main-content").load(location);
    });

    $("#site-tips").animate({ top: '0px' });
});

function action_closeTip() {
    $("#site-tips").animate({ top: '-30px' });
}