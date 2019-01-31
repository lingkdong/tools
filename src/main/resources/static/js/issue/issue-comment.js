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

    issueFlag=$("#issue-flag");
    createBtn=$("#create");


    $(createBtn).click(function (event) {
        create(1);//1 comment 2 closed 3 reopen
        stopEvent(event);
    })
})



function create(type) {
    if(undefined==type){
        alertError("参数错误");
        return false;
    }
    var issueId=$(issueFlag).attr("data-issue-id");
    if(isBlank(issueId)){
        alertError("参数错误");
        return false;
    }
    var comment=commentBody.getValue();
    if(isNotBlank(comment)){
        comment=comment.trim();
    }
    $.ajax({
        type: "post",
        url: PRE_FOX_AUTHC_BASE + "/issue/create-issue-comment.json",
        async: true,
        dataType: "json",
        beforeSend: function () {
            $(createBtn).attr(DISABLED, true).html("保存...");
        },
        data: {
            issueId: issueId,
            type: type,
            comment: comment
        },
        success: function (result) {
            if (backDetectResult(result)) {
                location.reload();
            }
        },
        error: function (result) {
            alertServerError();
        },
        complete: function () {
            $(createBtn).removeAttr(DISABLED).html("添加评论");
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
