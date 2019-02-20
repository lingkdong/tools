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

function chooseFilter(obj) {
    var checked = $(obj).attr("aria-checked");
    var flag = false;
    if ("true" != checked) flag = true;

    var name = $(obj).attr("data-name");
    //clear
    $("a[name='issue-filter'][data-name='" + name + "']").attr("aria-checked", false);
    //flag
    $(obj).attr("aria-checked", flag);

}

function getFilterParam() {
    var param = "";
    $("a[name='issue-filter'][aria-checked='true']").each(function () {
        var name = $(this).attr("data-name");
        var value = $(this).attr("data-value");
        if (param.length == 0) {
            param = name + "=" + value;
        } else {
            param = param + "&" + name + "=" + value;
        }
    })
    return param;
}

function searchIssue() {
    var url = PRE_FOX_ANON_BASE + "/issues/list?";
    var param = getParam();
    jump_page(url + param);
}