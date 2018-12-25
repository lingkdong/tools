$(function () {
    findIssue = $("#find-issue");
    var value=$(findIssue).val();
    $(findIssue).focus().val("").val(value);
    $(findIssue).keyup(function (event) {
        if(event.keyCode==13){
            searchIssue();
        }
        stopEvent(event);
    })

    $("a[name='issue-filter']").click(function (event) {
        chooseFilter(this);
        searchIssue();
        stopEvent(event);
    })

    $(".pager a").click(function (event) {
        changePage(event);
        stopEvent(event)
    })
})

function chooseFilter(obj) {
    var checked = $(obj).attr("aria-checked");
    if ("true" == checked) {
        $(obj).attr("aria-checked", false);
    } else {
        $(obj).attr("aria-checked", true);
    }
    var name = $(obj).attr("data-name");
    var value = $(obj).attr("data-value");
    $("a[name='issue-filter'][data-name='"+name+"'][data-value!='"+value+"']").attr("aria-checked", false);
}
function getParam(){
    var param = "";
    //get all filter conditions
    var title = $(findIssue).val().trim();
    if (isNotBlank(title)) {
        param = "title=" + title
    }
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

function changePage(event) {
    var url = PRE_FOX_ANON_BASE + "/issues/list?";
    var param = getParam();
    var number=$(event.delegateTarget).attr("data-number");
    if(isBlank(number))number="0";
    if(isNotBlank(param)){
        param=param+"&page="+number
    }else {
        param="page="+number
    }
    jump_page(url+param);
}