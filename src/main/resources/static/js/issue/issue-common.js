$(function () {
    $(document).on("click",".show-issue-user-card",function (e) {
        redirectToCard(this);
        stopEvent(e);
    })
})
function redirectToCard(obj) {
    var username = $(obj).attr("data-username");
    if (isNotBlank(username)) {
        var url = PRE_FOX_ANON_BASE + "/users/card/" + username;
        jump_page(url);
    }
}
