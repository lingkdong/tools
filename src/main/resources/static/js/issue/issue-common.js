$(function () {
    $(document).on("click", ".show-issue-user-card", function (e) {
        redirectToCard(this);
        stopEvent(e);
    })
    $(".js-jump-create").click(function (event) {
        jumpCreate();
        stopEvent(event);
    })
})

function redirectToCard(obj) {
    var username = $(obj).attr("data-username");
    if (isNotBlank(username)) {
        var url = PRE_FOX_ANON_BASE + "/users/card/" + username;
        jump_page(url);
    }
}

function jumpCreate() {
    var url = PRE_FOX_AUTHC_BASE + "/issue/new";
    jump_page(url);
}


function jumpDetail(obj) {
    var issueId=$(obj).attr("data-issue-id");
    jumpDetailById(issueId);
}

function jumpDetailById(issueId) {
    var url = PRE_FOX_AUTHC_BASE + "/issue/"+issueId;
    jump_page(url);
}