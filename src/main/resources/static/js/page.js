$(function () {
    headSearch=$("#header-search-input");
    pageAvatar=$("#page-avatar");
    pageAvatarData=$("#page-avatar-data");
    pageHidden=$("#page-hidden");
    NGINX_URL=$(pageHidden).attr("data-nginx");
    var value=$(headSearch).val();
    $(headSearch).focus().val("").val(value);
    $(document).mouseup(function(e){
        var _con = $('details');   // 设置目标区域
        if(!_con.is(e.target) && _con.has(e.target).length === 0){
             $(_con).removeAttr("open");
        }
    });
    $("#login_out").click(function (event) {
           loginOut();
           stopEvent(event);
    })
    initAvatar();
})
var PAGE_BASE_URL = PRE_FOX_ANON_BASE+"/user/";
function loginOut() {
    $.ajax({
        type: "post",
        url: PAGE_BASE_URL+"login-out.json",
        async: true,
        dataType: "json",
        data: {
        },
        success: function (result) {
            if (HttpStatus.OK == result.status) {
                location.reload();
            }else {
                alertServerError();
            }
        },
        error: function (result) {
            alertServerError();
        },
        complete: function () {
        }
    });
}

function initAvatar() {
    if(isExist(pageAvatar)&&isExist(pageAvatarData)){
        var data=$(pageAvatarData).attr("data-nginx");
        var avatar=$(pageAvatarData).html().trim();
        if(isNotBlank(data)&&isNotBlank(avatar)&&avatar!="null"){
            changeAvatarData(data+avatar);
        }
    }
}
function changeAvatarData(data) {
    if(!(isBlank(data)||data.trim()=="null")){
        $(pageAvatar).attr("src",data.trim()+"?"+Math.random()).show();
    }
}
function refreshAvatar() {
    $.ajax({
        type: "post",
        url: PRE_FOX_AUTHC_BASE+"/user/get-avatar.json",
        async: true,
        dataType: "json",
        data: {
        },
        success: function (result) {
            if (HttpStatus.OK == result.status) {
                var data=result.data;
                changeAvatarData(data);
            }
        },
        error: function (result) {
            alertServerError();
        },
        complete: function () {
        }
    });
}