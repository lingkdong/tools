$(function(){
    Simditor.locale = 'zh-CN'
    issueBody = new Simditor({
        textarea: $('#editor'),
        //optional options
        placeholder: '',
        pasteImage: true,//support paste
        upload : {
            url : PRE_FOX_AUTHC_BASE+'/issue/upload-file', //action url
            params: null, //
            fileKey:'file', //fileName
            connectionCount: 3,
            leaveConfirm: '正在上传文件'
        }
    });
    defaultLabel=$("#defaultLabel");
    issueTitle=$("#issue_title");
    createIssue=$("#create-issue");
    $("a[name='issue-filter'][data-name='label']").click(function (event) {
        chooseFilter2(this);
        $('details').removeAttr("open");
        stopEvent(event);
    })

    $(createIssue).click(function (event) {
        create();
        stopEvent(event);
    })
})


function chooseFilter2(obj) {
    var checked = $(obj).attr("aria-checked");
    var value=$(defaultLabel).attr("data-value");
    var name=$(defaultLabel).attr("data-labelName");
    var bgColor=$(defaultLabel).attr("data-bgColor");
    //clear
    $("a[name='issue-filter'][data-name='label']").attr("aria-checked", false);

    if(!(checked==true||checked=="true")){
        code=$(obj).attr("data-value");
        bgColor=$(obj).attr("data-bgColor");
        name=$(obj).attr("data-labelName");
        $(obj).attr("aria-checked", true);
    }else {
        //select default
        $("a[name='issue-filter'][data-name='label'][data-value='"+value+"']").attr("aria-checked", true)
    }
    var html='<span class="color"style="background-color:'+bgColor+'">&nbsp;</span>' +
        '<span class="name">'+name+'&nbsp;</span>';
    $("summary[name='label-selected']").html(html);
}

function detect() {
    if(isBlank($(issueTitle).val())){
        alertError("标题不能为空");
        return false;
    }
    if(isNotBlank(issueBody.getValue()) && issueBody.getValue().trim()>1000){
        alertError("评论内容不能超过1000");
        return false;
    }
    return true;
}

function create() {
    if(detect()){
        var title=$(issueTitle).val().trim();
        var label= $("a[name='issue-filter'][data-name='label'][aria-checked='true']").attr("data-value");
        var body=issueBody.getValue().trim();
        $.ajax({
            type: "post",
            url: PRE_FOX_AUTHC_BASE + "/issue/create-issue.json",
            async: true,
            dataType: "json",
            beforeSend: function () {
                $(createIssue).attr(DISABLED, true).html("保存...");
            },
            data: {
                title: title,
                label: label,
                body: body
            },
            success: function (result) {
                if (backDetectResult(result)) {
                     jump_issues(result.data)
                }
            },
            error: function (result) {
                alertServerError();
            },
            complete: function () {
                $(createIssue).removeAttr(DISABLED).html("创建问题");
            }
        });
    }
}


function backError(item) {
    switch (item.property) {
        case 'title':
            alertError(backErrorTxt("标题", item.status));
            break;
    }
}

function jump_issues(title) {
    var url=PRE_FOX_ANON_BASE+"/issues/list";
    if(isNotBlank(title))url=url+"?title="+title
    window.location.href = url;
}