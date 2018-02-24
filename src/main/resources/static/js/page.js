$(function () {
    headSearch=$("#header-search-input");
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
})
var LOGIN_OUT_BASE_URL = PRE_FOX_ANON_BASE+"/user/";
function loginOut() {
    $.ajax({
        type: "post",
        url: LOGIN_OUT_BASE_URL+"login-out.json",
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