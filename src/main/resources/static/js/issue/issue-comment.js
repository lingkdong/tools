$(function () {
    Simditor.locale = 'zh-CN'
    commentBody = new Simditor({
        textarea: $('#editor'),
        //optional options
        placeholder: '',
        pasteImage: true,//support paste
        upload: {
            url: PRE_FOX_AUTHC_BASE + '/issue/upload-file', //action url
            params: null, //
            fileKey: 'file', //fileName
            connectionCount: 3,
            leaveConfirm: '正在上传文件'
        }
    });

    createBtn = $("#create");
    changeStatusBtn = $("#change-status");
    toFooter();
    $(createBtn).click(function (event) {
        create(this);
        stopEvent(event);
    })
    $(changeStatusBtn).click(function (event) {
        changeStatus(this);
        stopEvent(event);
    })
    $("a[name='issue-filter']").click(function (event) {
        chooseFilter(this);
        searchIssue();
        stopEvent(event);
    })

})

function getParam() {
   return getFilterParam();
}
function create(obj) {
    var issueId = $(createBtn).attr("data-issue-id");
    var text = $(obj).html();
    if (isBlank(issueId)) {
        alertError("参数错误");
        return false;
    }
    var comment = commentBody.getValue();
    if (isNotBlank(comment)) {
        comment = comment.trim();
    }
    $.ajax({
        type: "post",
        url: PRE_FOX_AUTHC_BASE + "/issue/create-issue-comment.json",
        async: true,
        dataType: "json",
        beforeSend: function () {
            $(obj).attr(DISABLED, true).html("保存...");
        },
        data: {
            issueId: issueId,
            type: 1,//1 comment 2 closed 3 reopen
            comment: comment
        },
        success: function (result) {
            if (backDetectResult(result)) {
                var url = PRE_FOX_AUTHC_BASE + "/issue/" + issueId + "#footer";
                jump_page(url);
                location.reload();
            }
        },
        error: function (result) {
            alertServerError();
        },
        complete: function () {
            $(obj).removeAttr(DISABLED).html(text);
        }
    });
}

function changeStatus(obj) {
    var issueId = $(obj).attr("data-issue-id");
    var nowStatus = $(obj).attr("data-issue-status");//1.open 2.closed
    var type = 1;
    var text = $(obj).html();
    //deal : 1 comment 2 closed 3 reopen
    if (nowStatus == 1) {
        //to closed
        type = 2;
    } else if (nowStatus == 2) {
        // to  reopen
        type = 3
    }
    if (isBlank(issueId)) {
        alertError("参数错误");
        return false;
    }
    $.ajax({
        type: "post",
        url: PRE_FOX_AUTHC_BASE + "/issue/create-issue-comment.json",
        async: true,
        dataType: "json",
        beforeSend: function () {
            $(obj).attr(DISABLED, true).html("保存...");
        },
        data: {
            issueId: issueId,
            type: type
        },
        success: function (result) {
            if (backDetectResult(result)) {
                var url = PRE_FOX_AUTHC_BASE + "/issue/" + issueId + "#footer";
                jump_page(url);
                location.reload();
            }
        },
        error: function (result) {
            alertServerError();
        },
        complete: function () {
            $(obj).removeAttr(DISABLED).html(text);
        }
    });
}


function backError(item) {
    switch (item.property) {
        case 'comment':
            alertError(backErrorTxt("评论内容", item.status));
            break;
    }
}

function toFooter() {
    var url = window.location.href;
    if (url.indexOf("#footer") > 0) {
        scroll2Footer(300);
    }
}